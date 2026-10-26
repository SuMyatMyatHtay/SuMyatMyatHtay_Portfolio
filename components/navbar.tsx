"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../data/portfolio";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav-wrap">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="site-nav"
      >
        <Link href="/" className="brand-mark" aria-label="Su Myat Myat Htay home">
          <span className="brand-orbit" />
          <span>SM</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={active ? "nav-link active" : "nav-link"}>
                {item.label}
                {active && <motion.span layoutId="nav-pill" className="nav-active-pill" />}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="mobile-nav"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.035 }}
              >
                <Link
                  href={item.href}
                  className={pathname === item.href ? "mobile-nav-link active" : "mobile-nav-link"}
                  onClick={() => setOpen(false)}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
