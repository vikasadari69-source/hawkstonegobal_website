/**
 * ═══════════════════════════════════════════════════════════════════════════
 * Hawkstone-STYLE HEADER COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * README - How to Customize:
 * 
 * 1. REPLACE THE LOGO:
 *    - Add your logo image to: attached_assets/
 *    - Update the import below: import logo from '@assets/your-logo.png'
 *    - Adjust logoHeight in the styles if needed (current: 40px)
 * 
 * 2. CHANGE CTA BUTTON COLOR:
 *    - Edit src/siteContent.js → headerConfig.ctaButton.backgroundColor
 *    - Or modify the inline styles in the Contact button below
 * 
 * 3. MODIFY NAVIGATION LINKS:
 *    - Edit src/siteContent.js → headerConfig.navLinks array
 * 
 * 4. TEST OVERLAY BEHAVIOR:
 *    - Desktop: Click hamburger icon, verify overlay slides in from top-right
 *    - Tablet: Test at 768px width, ensure touch targets are large enough
 *    - Mobile: Test at 375px width, verify full-screen overlay
 *    - Keyboard: Tab through links, ESC to close, Enter to activate
 *    - Screen reader: Verify aria-expanded announces state changes
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import { headerConfig } from "@/siteContent";
import logo from "@assets/hawkstone-logo.png";
import "@/components/Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        if (firstLinkRef.current) {
          firstLinkRef.current.focus();
        } else if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      });
    } else {
      document.body.style.overflow = "";
      if (menuButtonRef.current) {
        menuButtonRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isMenuOpen) return;
    
    if (e.key === "Escape") {
      setIsMenuOpen(false);
    }
    
    if (e.key === "Tab") {
      const focusableElements = overlayRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (!focusableElements || focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const navigate = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location === path;

  return (
    <>
      <header
        className={`header ${isScrolled ? "header--scrolled" : ""}`}
        data-testid="header"
      >
        <div className="header__container">
          <a
            href="/"
            className="header__logo"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            data-testid="link-home"
          >
            <img
              src={logo}
              alt={headerConfig.companyName}
              className="header__logo-image"
            />
          </a>

          <div className="header__actions">
            <a
              href={headerConfig.ctaButton.href}
              className="header__cta-button"
              onClick={(e) => {
                e.preventDefault();
                navigate(headerConfig.ctaButton.href);
              }}
              style={{
                backgroundColor: headerConfig.ctaButton.backgroundColor,
                color: headerConfig.ctaButton.textColor,
              }}
              data-testid="button-contact-header"
            >
              {headerConfig.ctaButton.text}
            </a>

            <button
              ref={menuButtonRef}
              className="header__hamburger"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="nav-overlay"
              aria-label={headerConfig.ariaLabels.menuButton}
              data-testid="button-mobile-menu"
            >
              <span className="header__hamburger-line"></span>
              <span className="header__hamburger-line"></span>
              <span className="header__hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={overlayRef}
        id="nav-overlay"
        className={`nav-overlay ${isMenuOpen ? "nav-overlay--open" : ""}`}
        style={{
          backgroundColor: headerConfig.overlay.backgroundColor,
        }}
        role="dialog"
        aria-modal="true"
        aria-label={headerConfig.ariaLabels.mainNav}
      >
        <div
          className="nav-overlay__accent-border"
          style={{ backgroundColor: headerConfig.overlay.accentBorderColor }}
        />
        
        <button
          ref={closeButtonRef}
          className="nav-overlay__close"
          onClick={() => setIsMenuOpen(false)}
          aria-label={headerConfig.ariaLabels.closeButton}
          data-testid="button-close-menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav className="nav-overlay__nav" role="navigation">
          {headerConfig.navLinks.map((link, index) => (
            <button
              key={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              className={`nav-overlay__link ${isActive(link.href) ? "nav-overlay__link--active" : ""}`}
              onClick={() => navigate(link.href)}
              style={{
                color: isActive(link.href) 
                  ? headerConfig.overlay.linkHoverColor 
                  : headerConfig.overlay.linkColor,
              }}
              data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="nav-overlay__backdrop"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
