import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Twitter, Github } from "lucide-react";

const links = [
    { label: "ForkScout", href: "https://github.com/marsnext/forkscout" },
    {
        label: "Memory MCP",
        href: "https://github.com/marsnext/forkscout-memory-mcp",
    },
    {
        label: "AgentTest Lab",
        href: "https://github.com/marsnext/ai-agent-test-lab",
    },
    { label: "GitHub Org", href: "https://github.com/marsnext" },
];

export function Footer() {
    return (
        <>
            {/* Contact CTA banner */}
            <section
                id="contact"
                className="relative overflow-hidden bg-[#060a17] px-6 py-24"
            >
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/15 blur-[100px]" />
                </div>
                <div className="relative mx-auto max-w-3xl text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="mx-auto mb-8 max-w-lg text-slate-400">
                        Interested in our work, want to collaborate on a project, or just
                        want to say hello? We&rsquo;d love to hear from you.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="gap-2 bg-violet-600 px-8 hover:bg-violet-500 text-white"
                        >
                            <a href="mailto:info@marsnext.io">
                                <Mail size={16} /> info@marsnext.io
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="gap-2 border-white/20 bg-white/5 px-8 text-slate-200 hover:bg-white/10 hover:text-white"
                        >
                            <a
                                href="https://x.com/0xMarsNext"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter size={16} /> @0xMarsNext
                            </a>
                        </Button>
                    </div>

                    {/* Quick info */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-slate-500 sm:flex-row sm:gap-8">
                        <span className="flex items-center gap-1.5">
                            <MapPin size={14} /> India
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Globe size={14} />
                            <a
                                href="http://marsnext.io"
                                className="hover:text-slate-300 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                marsnext.io
                            </a>
                        </span>
                    </div>
                </div>
            </section>

            {/* Footer bar */}
            <footer className="bg-[#04070f] px-6 py-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        {/* Brand */}
                        <div>
                            <div className="text-lg font-bold text-white">
                                Mars<span className="text-violet-400">Next</span>
                            </div>
                            <p className="mt-1 text-xs text-slate-600">
                                AI systems for the real world.
                            </p>
                        </div>

                        {/* Links */}
                        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {links.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-slate-500 transition hover:text-slate-300"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </nav>

                        {/* Socials */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/marsnext"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 transition hover:text-white"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://x.com/0xMarsNext"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 transition hover:text-white"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    <Separator className="my-6 bg-white/5" />

                    <p className="text-center text-xs text-slate-700">
                        © {new Date().getFullYear()} MarsNext. MIT Licensed. Built in India.
                    </p>
                </div>
            </footer>
        </>
    );
}

// Inline Globe icon (not in lucide-react base set)
function Globe({ size = 16 }: { size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}
