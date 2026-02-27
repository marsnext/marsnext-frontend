"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { label: "What We Build", href: "#what-we-build" },
    { label: "Open Source", href: "#open-source" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#080c1a]/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-white">
                        Mars<span className="text-violet-400">Next</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm text-slate-400 transition hover:text-white"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Button
                        asChild
                        size="sm"
                        className="bg-violet-600 hover:bg-violet-500 text-white"
                    >
                        <a
                            href="https://github.com/marsnext"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </Button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="border-t border-white/10 bg-[#080c1a] px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="text-sm text-slate-300 hover:text-white"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="https://github.com/marsnext"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 text-sm font-medium text-violet-400 hover:text-violet-300"
                        >
                            GitHub →
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
