"use client";

import * as React from "react";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/About" },
  { label: "Experience", href: "/Experience" },
  { label: "Work", href: "/Work" },
  { label: "Contact", href: "/Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-paper bg-ink">
      <div className="mx-auto px-6 h-16 flex items-center justify-between w-full">
        <Link
          href="/"
          aria-label="Back to homepage"
          className="flex flex-col leading-tight gap-0"
          onClick={() => setIsOpen(false)}
        >
          <Typography font="display" color="mist" size="heading-06">
            Maria Stephanie Febryana Kristijanto
          </Typography>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-50"
            >
              <Typography font="mono" color="mist" size="heading-06">
                {link.label}
              </Typography>
            </Link>
          ))}
        </div>
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-mist transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-mist transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-mist transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 pt-2 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Typography
                font="mono"
                color={pathname === link.href ? "signal-blue" : "mist"}
                size="body"
              >
                {link.label}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
