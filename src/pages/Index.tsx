import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Megaphone,
  Palette,
  LineChart,
  Film,
  Bot,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";

// Simple utility components
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>{children}</div>
);

const PrimaryCTA = ({ children, href = "#contact" }: { children: React.ReactNode; href?: string }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-black/5 transition hover:bg-white"
  >
    {children} <ArrowRight className="h-4 w-4" />
  </a>
);

const GhostCTA = ({ children, href = "#work" }: { children: React.ReactNode; href?: string }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
  >
    {children}
  </a>
);

const SectionHeading = ({ kicker, title, sub }: { kicker?: string; title: React.ReactNode; sub?: string }) => (
  <div className="mb-12 text-center">
    {kicker && (
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">{kicker}</p>
    )}
    <h2 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl">
      {title}
    </h2>
    {sub && (
      <p className="mx-auto mt-4 max-w-[720px] text-pretty text-base leading-relaxed text-white/70">
        {sub}
      </p>
    )}
  </div>
);

const FeatureCard = ({ icon: Icon, title, text, tone = "neutral" }: { icon: React.ElementType; title: string; text: string; tone?: string }) => {
  const tones: Record<string, string> = {
    neutral: "from-neutral-800 to-neutral-900",
    green: "from-emerald-700 to-emerald-900",
    purple: "from-violet-700 to-violet-900",
    red: "from-rose-700 to-rose-900",
    blue: "from-sky-700 to-sky-900",
    amber: "from-amber-700 to-amber-900",
  };
  return (
    <div className="group relative overflow-hidden rounded-3xl p-[1px] transition-transform will-change-transform hover:scale-[1.01]">
      <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${tones[tone]} opacity-30 blur-3xl`}></div>
      <div className="relative h-full rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-white/10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
      </div>
    </div>
  );
};

const Package = ({ title, price, highlights = [], featured = false }: { title: string; price: string; highlights?: string[]; featured?: boolean }) => (
  <div
    className={`relative flex flex-col rounded-3xl p-6 ring-1 ring-white/10 ${
      featured
        ? "bg-white text-neutral-900 shadow-2xl shadow-emerald-500/10"
        : "bg-neutral-950/40 text-white"
    }`}
  >
    {featured && (
      <span className="absolute -top-3 left-6 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
        Recommended
      </span>
    )}
    <h4 className={`text-xl font-bold ${featured ? "text-neutral-900" : "text-white"}`}>{title}</h4>
    <div className="mt-3 flex items-baseline gap-1">
      <span className={`text-4xl font-bold ${featured ? "text-neutral-900" : "text-white"}`}>{price}</span>
      <span className={`text-sm ${featured ? "text-neutral-600" : "text-white/60"}`}>/ mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2">
      {highlights.map((h, i) => (
        <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
          <CheckCircle2 className={`mt-0.5 h-4 w-4 ${featured ? "text-emerald-600" : "text-emerald-400"}`} />
          <span className={featured ? "text-neutral-800" : "text-white/80"}>{h}</span>
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className={`mt-6 inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold ${
        featured
          ? "bg-neutral-900 text-white hover:bg-neutral-800"
          : "bg-white/10 text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
      }`}
    >
      Book a consult
    </a>
  </div>
);

// Decorative background blob
const Blob = ({ className = "" }: { className?: string }) => (
  <div
    className={`pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(55%_55%_at_50%_40%,black,transparent)] ${className}`}
  >
    <div className="absolute left-1/2 top-[-10%] h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-500/20 via-sky-500/10 to-fuchsia-500/0 blur-3xl" />
    <div className="absolute left-[15%] top-[30%] h-[30rem] w-[30rem] rounded-full bg-gradient-to-b from-fuchsia-500/20 to-transparent blur-2xl" />
    <div className="absolute right-[10%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-b from-sky-400/20 to-transparent blur-2xl" />
  </div>
);

// IMAGE PLACEHOLDER (simulates portfolio thumbs)
const Thumb = ({ label }: { label: string }) => (
  <div className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10">
    <div className="aspect-[16/10] w-full bg-[radial-gradient(80%_80%_at_50%_20%,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
    <div className="absolute bottom-3 left-4 text-sm font-medium text-white">{label}</div>
  </div>
);

export default function Index() {
  const services = [
    {
      icon: Sparkles,
      title: "Brand Strategy",
      text: "Positioning, messaging, and creative platforms that make your brand impossible to ignore.",
      tone: "purple",
    },
    {
      icon: Megaphone,
      title: "Media Buying",
      text: "Google Ads, Meta, TikTok, LinkedIn — full‑funnel structures tuned for scale and efficiency.",
      tone: "green",
    },
    {
      icon: LineChart,
      title: "Analytics & CRO",
      text: "GA4, Looker Studio, A/B testing, and dashboards that tie spend to growth.",
      tone: "blue",
    },
    {
      icon: Palette,
      title: "Creative & Content",
      text: "Story‑led concepts, scripts, and production across photo, video, and interactive.",
      tone: "red",
    },
    {
      icon: Film,
      title: "Production",
      text: "End‑to‑end shoots, reels, and motion pieces built for speed and quality.",
      tone: "amber",
    },
    {
      icon: Bot,
      title: "Automation & AI",
      text: "Prompts, agents, and pipelines that turn busywork into leverage.",
      tone: "neutral",
    },
  ];

  const packages = [
    {
      title: "Starter",
      price: "$1,200",
      highlights: [
        "Strategy sprint (2 weeks)",
        "1x landing page + 3x ad creatives",
        "Basic GA4 + Looker report",
      ],
      featured: false,
    },
    {
      title: "Growth",
      price: "$3,500",
      highlights: [
        "Monthly creative + media ops",
        "Search + Paid Social management",
        "Advanced dashboards + CRO",
      ],
      featured: true,
    },
  ];

  return (
    <main className="min-h-screen scroll-smooth bg-neutral-950 text-white">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <Container className="flex h-14 items-center justify-between">
          <a href="/" className="group inline-flex items-center gap-3">
            <div className="h-6 w-6 rounded-lg bg-white" />
            <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
              House of Sid
            </span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#packages" className="hover:text-white">Packages</a>
            <a href="/checklist" className="hover:text-white">Checklist</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-xl bg-white px-3 py-1.5 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-black/5 hover:bg-white sm:inline-flex"
          >
            Book a consult
          </a>
        </Container>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <Blob />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_80%_at_50%_20%,#111,transparent)]" />
        <Container className="relative flex min-h-[72vh] flex-col items-center justify-center py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-balance text-5xl font-extrabold tracking-[-0.02em] text-white sm:text-7xl"
          >
            Creative. Media. Data.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-[760px] text-lg leading-relaxed text-white/70"
          >
            House of Sid blends brand storytelling with performance marketing and analytics. We build
            systems that <span className="text-white">look world‑class</span> and <span className="text-white">scale efficiently</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <PrimaryCTA>Book a consult</PrimaryCTA>
            <GhostCTA>View work</GhostCTA>
          </motion.div>

          {/* Faux device stage */}
          <div className="mt-14 w-full">
            <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/40 p-3 shadow-2xl shadow-black/60">
              <div className="aspect-[16/8] w-full rounded-[1.5rem] bg-[radial-gradient(90%_120%_at_50%_20%,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]" />
            </div>
            <p className="mt-4 text-center text-xs text-white/50">Showreel placeholder — swap with your video/image.</p>
          </div>
        </Container>
      </section>

      {/* EXPERIENCE / VALUE PROP */}
      <section className="relative border-y border-white/10 bg-neutral-950 py-24">
        <Container>
          <SectionHeading
            kicker="Experience"
            title={
              <>
                Channeling the best of brand. <br className="hidden sm:block" /> And the best of performance.
              </>
            }
            sub="Strategy that clarifies. Creative that moves. Media that converts. Analytics that closes the loop."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={Sparkles} title="Strategy" text="Positioning, narrative, brand systems." tone="purple" />
            <FeatureCard icon={Megaphone} title="Media" text="Full‑funnel Google, Meta, TikTok, LinkedIn." tone="green" />
            <FeatureCard icon={LineChart} title="Analytics" text="GA4, attribution, CRO, dashboards." tone="blue" />
            <FeatureCard icon={Palette} title="Creative" text="Concepts, design, scripts, content." tone="red" />
          </div>
        </Container>
      </section>

      {/* PORTFOLIO GRID */}
      <section id="work" className="relative bg-neutral-950 py-24">
        <Container>
          <SectionHeading
            kicker="Selected work"
            title="A few stories we're proud of."
            sub="Swap these placeholders with campaign visuals — keep the rounded tiles and overlay for the cinematic feel."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "A Bank · Family Olympics",
              "JobNet Cambodia · Launch",
              "EFF Gas · Street Kitchen",
              "Dermaluxe · Clinic Series",
              "Padesar · App Launch",
              "SHY Jewelry · Thadingyut",
            ].map((label) => (
              <Thumb key={label} label={label} />
            ))}
          </div>
        </Container>
      </section>

      {/* CINEMATIC FULL BLEED */}
      <section className="relative overflow-hidden border-y border-white/10 bg-neutral-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_80%_at_50%_30%,#0b0b0b,transparent)]" />
        <div className="mx-auto max-w-[1600px] px-0">
          <div className="relative aspect-[16/6] w-full overflow-hidden bg-[radial-gradient(80%_120%_at_50%_20%,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]">
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent,rgba(0,0,0,0.6))]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/70">Cinematic experience</p>
                <h3 className="text-balance px-4 text-4xl font-bold leading-tight sm:text-6xl">True‑to‑life ideas. Unreal results.</h3>
                <p className="mx-auto mt-4 max-w-[780px] px-4 text-white/70">
                  From quiet brand moments to high‑velocity growth campaigns — we make creative and conversion play nicely together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (Detailed) */}
      <section id="services" className="relative bg-neutral-950 py-24">
        <Container>
          <SectionHeading
            kicker="Capabilities"
            title="Everything you need in one team."
            sub="We built House of Sid to move like a startup and think like a brand studio."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <FeatureCard key={s.title} icon={s.icon} title={s.title} text={s.text} tone={s.tone} />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-white/10">
              <ShieldCheck className="h-6 w-6 text-white" />
              <h4 className="mt-3 text-lg font-semibold">Brand safety & governance</h4>
              <p className="mt-2 text-sm text-white/70">Process, approvals, and QA checklists built into every deliverable.</p>
            </div>
            <div className="rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-white/10">
              <Zap className="h-6 w-6 text-white" />
              <h4 className="mt-3 text-lg font-semibold">Fast iteration</h4>
              <p className="mt-2 text-sm text-white/70">We ship in weekly sprints with transparent roadmaps and metrics.</p>
            </div>
            <div className="rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-white/10">
              <Film className="h-6 w-6 text-white" />
              <h4 className="mt-3 text-lg font-semibold">Content at scale</h4>
              <p className="mt-2 text-sm text-white/70">Bundles for reels, statics, scripts, and landing pages you can reuse.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="relative border-y border-white/10 bg-neutral-950 py-24">
        <Container>
          <SectionHeading
            kicker="Packages"
            title="Pick your starting point."
            sub="Custom scopes available — these bundles just help us get moving fast."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {packages.map((p) => (
              <Package key={p.title} {...p} />
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="relative bg-neutral-950 py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold">Let's build something iconic.</h3>
              <p className="mt-3 max-w-[520px] text-white/70">
                Tell us about your goals. We'll come back with a plan, a timeline, and a first set of ideas.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryCTA>Book a consult</PrimaryCTA>
                <GhostCTA href="#services">See capabilities</GhostCTA>
              </div>
            </div>
            <div className="rounded-2xl bg-neutral-950 p-6 ring-1 ring-white/10">
              <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  placeholder="Your name"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-white/20"
                />
                <input
                  placeholder="Work email"
                  type="email"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-white/20"
                />
                <textarea
                  placeholder="What are you trying to achieve?"
                  rows={4}
                  className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-white/20"
                />
                <button
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-black/5 hover:bg-white"
                >
                  Send inquiry
                </button>
                <p className="text-xs text-white/40">By submitting, you agree to be contacted about your request.</p>
              </form>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
            <p>© {new Date().getFullYear()} House of Sid. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
