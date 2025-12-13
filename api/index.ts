import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import { registerRoutes } from "../server/routes";

// Load environment variables
dotenv.config();

const app = express();
const httpServer = createServer(app);

// Middleware setup
app.use(express.json({
    limit: '50mb',
    verify: (req, _res, buf) => {
        (req as any).rawBody = buf;
    },
}));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

// Debug logging middleware
app.use((req, res, next) => {
    console.log(`[API Debug] ${req.method} ${req.url} (path: ${req.path}, baseUrl: ${req.baseUrl})`);
    next();
});

// Register routes with robust error handling for Vercel
let routesRegistered = false;
let initializationError: any = null;
try {
    console.log("Attempting to register routes...");
    registerRoutes(httpServer, app);
    routesRegistered = true;
    console.log("Routes registered successfully");
} catch (err) {
    console.error("CRITICAL: Failed to register routes:", err);
    initializationError = err;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
    res.json({
        status: "ok",
        routesRegistered,
        initializationError: initializationError ? initializationError.toString() : null,
        timestamp: new Date().toISOString()
    });
});

// Error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error("API Error handled by middleware:", err);
    res.status(status).json({ message });
});

// 404 handler for API routes
app.use((req, res) => {
    res.status(404).json({
        message: "API route not found",
        path: req.path,
        routesRegistered,
        initializationError: initializationError ? initializationError.toString() : null
    });
});

export default app;
