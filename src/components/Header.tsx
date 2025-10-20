import { memo } from "react";

const Header = memo(() => {
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shadow-md"
          style={{
            background: "var(--brand-gradient-warm)",
          }}
        >
          HS
        </div>
        <div>
          <h1 className="text-lg font-semibold text-foreground">House of Sid</h1>
          <p className="text-xs text-muted-foreground">
            Interactive Brand Checklist
          </p>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 text-sm text-foreground/80">
        <a href="#checklist" className="hover:text-foreground transition-colors">
          Checklist
        </a>
        <a href="#about" className="hover:text-foreground transition-colors">
          About
        </a>
        <a
          href="#contact"
          className="font-medium px-4 py-2 bg-card rounded-lg hover:bg-secondary transition-colors"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
