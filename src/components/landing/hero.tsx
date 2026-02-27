import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080c1a] px-6 pt-16">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[120px]" />
                <div className="absolute left-1/3 top-2/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-700/15 blur-[120px]" />
                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-5xl text-center">
                <Badge
                    variant="outline"
                    className="mb-6 border-violet-500/40 bg-violet-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-violet-300"
                >
                    AI Systems for the Real World
                </Badge>

                <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
                    Building at the{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        frontier
                    </span>{" "}
                    of applied AI
                </h1>

                <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
                    We build at the intersection of autonomous systems, applied AI, and
                    open-source infrastructure — from intelligent web agents to
                    AI-controlled drone delivery networks designed to reach the most
                    remote corners of the planet.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                        asChild
                        size="lg"
                        className="gap-2 bg-violet-600 px-8 hover:bg-violet-500 text-white"
                    >
                        <a href="#open-source">
                            Explore Projects <ArrowRight size={16} />
                        </a>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="gap-2 border-white/20 bg-white/5 px-8 text-slate-200 hover:bg-white/10 hover:text-white"
                    >
                        <a
                            href="https://github.com/marsnext"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github size={16} /> GitHub
                        </a>
                    </Button>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 sm:grid-cols-3">
                    {[
                        { value: "3", label: "Open Source Projects" },
                        { value: "9+", label: "LLM Providers" },
                        { value: "22", label: "Memory MCP Tools" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl font-bold text-white md:text-4xl">
                                {stat.value}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
