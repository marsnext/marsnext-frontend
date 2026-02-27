import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const products = [
    {
        name: "ForkScout",
        tagline: "Autonomous AI Agent",
        description:
            "A self-hosted, fully autonomous AI agent with persistent memory, multi-model LLM routing, budget tracking, self-modification, and multi-channel communication. Runs on Bun with TypeScript and supports 9+ LLM providers via a single JSON config.",
        features: [
            "9+ LLM providers",
            "Persistent memory via MCP",
            "Telegram + Terminal channels",
            "Self-modifying + blue-green restart",
            "Parallel & sequential workers",
            "Secret vault (AES-256-GCM)",
        ],
        tags: ["TypeScript", "Bun", "AI SDK v6", "MCP"],
        github: "https://github.com/marsnext/forkscout",
        accent: "from-violet-600/25 to-indigo-600/10",
        border: "border-violet-500/30",
        tagColor: "border-violet-500/40 bg-violet-500/10 text-violet-300",
        badgeColor: "bg-violet-600/20 text-violet-300 border-violet-500/30",
        emoji: "🤖",
    },
    {
        name: "ForkScout Memory MCP",
        tagline: "Persistent AI Agent Memory",
        description:
            "A standalone MCP server that gives LLMs long-term memory via a structured belief-maintenance system — not a vector DB. Features confidence scoring, non-destructive fact supersession, contradiction detection, multi-project isolation, and a knowledge graph.",
        features: [
            "22 MCP tools",
            "Confidence-scored facts",
            "Belief evolution history",
            "Cross-project isolation",
            "Knowledge graph (30 entity types)",
            "Self-identity + task tracking",
        ],
        tags: ["TypeScript", "Bun", "MCP", "Knowledge Graph"],
        github: "https://github.com/marsnext/forkscout-memory-mcp",
        accent: "from-emerald-600/25 to-teal-600/10",
        border: "border-emerald-500/30",
        tagColor: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
        badgeColor: "bg-emerald-600/20 text-emerald-300 border-emerald-500/30",
        emoji: "🧠",
    },
    {
        name: "AgentTest Lab",
        tagline: "AI Agent Web Testing",
        description:
            "A comprehensive, interactive web testing laboratory built specifically for AI agents. Provides 7 distinct test suites covering every major browser interaction pattern, paired with a live analytics dashboard tracking scores, response times, and operation success rates.",
        features: [
            "7 test suites",
            "Live analytics dashboard",
            "Letter-grade scoring (S/A/B/C/F)",
            "Forms, Navigation, Drag & Drop",
            "Dynamic content & Modals",
            "Real-world scenario testing",
        ],
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
        github: "https://github.com/marsnext/ai-agent-test-lab",
        accent: "from-amber-600/25 to-orange-600/10",
        border: "border-amber-500/30",
        tagColor: "border-amber-500/40 bg-amber-500/10 text-amber-300",
        badgeColor: "bg-amber-600/20 text-amber-300 border-amber-500/30",
        emoji: "🔬",
    },
];

export function Products() {
    return (
        <section id="open-source" className="bg-[#080c1a] px-6 py-24">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
                        Open Source
                    </p>
                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Our Projects
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-slate-400">
                        Three open-source tools at the frontier of applied AI — free to
                        use, built in production, actively maintained.
                    </p>
                </div>

                {/* Product cards */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {products.map((p) => (
                        <Card
                            key={p.name}
                            className={`relative flex flex-col overflow-hidden border ${p.border} bg-gradient-to-br ${p.accent} bg-slate-900/50`}
                        >
                            <div className="absolute inset-0 bg-[#080c1a]/55" />

                            <CardHeader className="relative">
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="text-3xl">{p.emoji}</span>
                                    <Badge
                                        variant="outline"
                                        className={`text-xs ${p.tagColor}`}
                                    >
                                        {p.tagline}
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl text-white">{p.name}</CardTitle>
                                <CardDescription className="mt-2 text-base leading-relaxed text-slate-400">
                                    {p.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="relative flex-1">
                                <div className="mb-4">
                                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Key Features
                                    </p>
                                    <ul className="space-y-2">
                                        {p.features.map((f) => (
                                            <li
                                                key={f}
                                                className="flex items-center gap-2 text-sm text-slate-300"
                                            >
                                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech tags */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <Badge
                                            key={t}
                                            variant="outline"
                                            className={`text-xs ${p.badgeColor}`}
                                        >
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="relative border-t border-white/10 pt-4">
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="gap-1.5 text-slate-300 hover:text-white w-full justify-center border border-white/10 hover:border-white/20 hover:bg-white/5"
                                >
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github size={14} />
                                        View on GitHub
                                        <ArrowUpRight size={13} />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
