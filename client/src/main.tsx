import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply light theme classes directly
document.documentElement.classList.add("theme-light");
document.documentElement.dataset.theme = "light";
document.body.classList.add("theme-light");
document.body.dataset.theme = "light";

createRoot(document.getElementById("root")!).render(<App />);
