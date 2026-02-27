import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const pillars = [
    {
        emoji: "🚁",
        title: "Autonomous Drone Delivery",
        description:
            "AI-controlled last-mile delivery systems engineered for remote hilly terrain where roads and conventional logistics fail. Our systems combine computer vision, real-time path planning, and edge AI to make reliable delivery possible anywhere.",
        accent: "from-sky-500/20 to-blue-600/10",
        border: "border-sky-500/20",
        tag: "sky",
    },
    {
        emoji: "🤖",
        title: "AI Agent Tooling",
        description:
            "Open-source frameworks and testing infrastructure for building, evaluating, and deploying AI web agents. From interaction testing to memory systems, we open-source the primitives that make agents reliable.",
        accent: "from-violet-500/20 to-purple-600/10",
        border: "border-violet-500/20",
        tag: "violet",
    },
    {
        emoji: "🧠",
        title: "Applied AI Research",
        description:
            "We solve real engineering problems at the edge — low-bandwidth communication, GPS-denied navigation, offline AI inference, and autonomous decision-making under uncertainty.",
        accent: "from-emerald-500/20 to-teal-600/10",
        border: "border-emerald-500/20",
        tag: "emerald",
    },
];

export function WhatWeBuild() {
    return (
        <section
            id="what-we-build"
            className="bg-[#060a17] px-6 py-24"
        >
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
                        Our Focus
                    </p>
                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        What We&rsquo;re Building
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-slate-400">
                        Three interconnected areas where we push the boundary of what
                        applied AI can do in the real world.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {pillars.map((p) => (
                        <Card
                            key={p.title}
                            className={`relative overflow-hidden border bg-gradient-to-br ${p.accent} ${p.border} bg-slate-900/40`}
                        >
                            <div className="absolute inset-0 bg-[#080c1a]/60" />
                            <CardHeader className="relative">
                                <div className="mb-3 text-4xl">{p.emoji}</div>
                                <CardTitle className="text-xl text-white">
                                    {p.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative">
                                <CardDescription className="text-base leading-relaxed text-slate-400">
                                    {p.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
