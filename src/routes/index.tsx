import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hawky.ai Values Workshop" },
      {
        name: "description",
        content:
          "Help shape the values Hawky.ai will carry into its next chapter through reflection, stories, and a team vote.",
      },
      { property: "og:title", content: "Hawky.ai Values Workshop" },
      {
        property: "og:description",
        content: "A team exercise to discover the values Hawky.ai wants to protect as it grows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const companies = [
  { name: "Ratan Tata", company: "Tata Group", text: "Integrity, Responsibility, Excellence, Pioneering and Unity show how values can become a durable framework for growth — not just a founder’s philosophy." },
  { name: "Satya Nadella", company: "Microsoft", text: "The ‘learn-it-all’ over the ‘know-it-all’ shows how curiosity and the ability to change can become a cultural advantage." },
  { name: "Netflix", company: "Culture principle", text: "Context, not control: give people enough context to make good decisions. Autonomy only works when paired with responsibility." },
  { name: "Stripe", company: "Operating principles", text: "Users-first thinking sits alongside urgency, curiosity, craft and egoless collaboration. Moving fast is stronger when paired with quality." },
  { name: "Airbnb", company: "Core values", text: "Champion the Mission, Be a Host, Embrace the Adventure and Be a Cereal Entrepreneur prove a value can have personality and still set a serious expectation." },
  { name: "Atlassian", company: "Core values", text: "Memorable language like ‘Open company, no bullshit’ shows that people remember values they can actually say out loud." },
];

const amazonPrinciples = [
  "Customer Obsession", "Ownership", "Invent and Simplify", "Are Right, A Lot",
  "Learn and Be Curious", "Hire and Develop the Best", "Insist on the Highest Standards",
  "Think Big", "Bias for Action", "Frugality", "Earn Trust", "Dive Deep",
  "Have Backbone; Disagree and Commit", "Deliver Results",
];

const values = [
  { name: "Customer obsessed", meaning: "We don’t build because something is cool. We build because it solves a real customer problem.", test: "A customer asks for something inconvenient. Do we dismiss it — or understand why it matters?" },
  { name: "Own the outcome", meaning: "Don’t just finish your task. Care about what happens next.", test: "Something is technically someone else’s problem. Do you still make sure it gets solved?" },
  { name: "Move fast", meaning: "A decision made today and corrected next week can beat a perfect decision made next month.", test: "Where are we waiting for permission, certainty or consensus that we don’t need?" },
  { name: "Think bigger", meaning: "Don’t optimise only for today’s company. Build for the company we want to become.", test: "When a problem feels impossible, do we stop at ‘can’t’ or ask ‘what would it take?’" },
  { name: "Learn like crazy", meaning: "Our assumptions will be wrong. The advantage is how quickly we learn and adapt.", test: "Can we say ‘I don’t know’ without embarrassment — and then go figure it out?" },
  { name: "Tell the truth", meaning: "Surface the uncomfortable thing early: bad numbers, broken experiences, mistakes and concerns.", test: "Does bad news reach the right person quickly enough to still do something about it?" },
  { name: "Raise the bar", meaning: "Don’t normalise ‘good enough’ when better is achievable.", test: "What quality standard should never be compromised just because we’re busy?" },
  { name: "One Hawky", meaning: "Product, engineering, sales, marketing and operations are different functions — but one company.", test: "Are we optimising for our team, or for Hawky?" },
  { name: "Be resourceful", meaning: "Constraints should make us creative, not helpless.", test: "When we don’t have enough time, money or people, do we find another path?" },
  { name: "Bring the energy", meaning: "Make the people around you better. Bring optimism without pretending every problem is easy.", test: "After working with you, do people feel more capable or less capable?" },
];

const steps = [
  ["Pick 3–5 values", "Use these ideas, or invent something completely new."],
  ["Name it", "Make it memorable enough that a Hawky person could say it naturally."],
  ["Show it", "Give us a real Hawky story where someone demonstrated it."],
  ["Future-test it", "Why will this still matter when Hawky is 10× bigger?"],
];

const sources = [
  ["Amazon", "https://www.aboutamazon.com/news/workplace/what-do-each-of-amazons-16-leadership-principles-really-mean"],
  ["Tata", "https://www.tata.com/about-us/tata-values-purpose"],
  ["Netflix", "https://jobs.netflix.com/culture"],
  ["Stripe", "https://stripe.com/guides/atlas/creating-your-founding-documents"],
  ["Airbnb", "https://careers.airbnb.com/life-at-airbnb/"],
  ["Atlassian", "https://www.atlassian.com/company/values"],
  ["Microsoft", "https://learn.microsoft.com/en-us/services-hub/release-notes/services-hub-news/growth-mindset"],
];

function StepLabel({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "sky" | "mint" }) {
  return <span className={`step-label step-label-${tone}`}>{children}</span>;
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <div className="page-wash" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        <header className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Hawky.ai values workshop home">
            <span className="brand-mark">H</span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold">hawky<span className="text-brand">.ai</span></span>
              <span className="block text-xs font-bold text-foreground/50">Values workshop</span>
            </span>
          </a>
          <span className="glass-chip hidden sm:inline-flex">30 people → next chapter</span>
        </header>

        <section id="top" className="hero-panel mt-10 p-7 sm:mt-12 sm:p-12 lg:p-16">
          <StepLabel>Our values workshop</StepLabel>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.98] sm:text-7xl lg:text-8xl">
            A new office.<br />A new <span className="hero-accent">chapter.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-xl font-semibold leading-snug text-foreground/80 sm:text-2xl">
            Hawky is growing. The question isn’t what we want to put on a wall. It’s <strong className="text-foreground">what we want to remain true about us</strong> as we become much, much bigger.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            This week, think about the behaviours, attitudes and ways of working that made Hawky feel like Hawky. Then help us decide what we carry forward.
          </p>
          <a href="#your-turn" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Jump to your questions <ArrowDown className="size-4" />
          </a>
          <div className="mt-9 flex flex-wrap gap-3">
            <span className="glass-chip">14 principles · inspiration</span>
            <span className="glass-chip">10 ideas · not final</span>
            <span className="glass-chip">Paper + team vote</span>
          </div>
        </section>

        <section className="section-space">
          <StepLabel tone="sky">01 · Why values?</StepLabel>
          <h2 className="section-title">At 5 people, culture is obvious.<br />At 100, it needs to be explicit.</h2>
          <p className="section-intro">When everyone sits together, people absorb culture without being told. As a company grows, values turn invisible habits into shared expectations.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="glass-card">
              <span className="card-kicker">The Amazon lesson</span>
              <h3 className="card-title">Watch what great people actually do.</h3>
              <p className="card-copy">Amazon made the behaviours of great Amazonians explicit — not just aspirational words. Its original set had 14 principles; two came later.</p>
            </article>
            <article className="glass-card">
              <span className="card-kicker">The Hawky lesson</span>
              <h3 className="card-title">Don’t copy another company’s culture.</h3>
              <p className="card-copy">Hawky should discover its own language by looking at the people and moments that already make us proud.</p>
            </article>
          </div>
          <blockquote className="quote-panel">“A good value should help someone make a better decision — especially when nobody is watching.”</blockquote>
        </section>

        <section className="section-space">
          <StepLabel>02 · The reference point</StepLabel>
          <div className="mt-5 flex items-end justify-between gap-6">
            <div>
              <h2 className="section-title mt-0">Amazon’s original 14</h2>
              <p className="section-intro">A useful mirror, not a template. Notice which feel true for Hawky — and which don’t.</p>
            </div>
            <span className="hidden font-display text-7xl font-bold text-brand/15 sm:block">14</span>
          </div>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {amazonPrinciples.map((principle, index) => (
              <li key={principle} className="principle-row"><span>{String(index + 1).padStart(2, "0")}</span>{principle}</li>
            ))}
          </ol>
        </section>

        <section className="section-space">
          <StepLabel tone="sky">03 · Companies we can learn from</StepLabel>
          <h2 className="section-title">Different companies.<br />Different personalities.</h2>
          <p className="section-intro">The point isn’t to borrow their words. It’s to notice how values become operating principles.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((item) => (
              <article key={item.name} className="glass-card min-h-56">
                <h3 className="font-display text-2xl font-semibold">{item.name}</h3>
                <p className="mt-1 text-xs font-extrabold uppercase text-accent">{item.company}</p>
                <p className="card-copy mt-5">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-space">
          <StepLabel tone="mint">04 · Ideas to provoke you</StepLabel>
          <h2 className="section-title">Maybe Hawky is...</h2>
          <p className="section-intro">These are deliberately unfinished. Open a value to see what it could mean in practice. None of these are final.</p>
          <div className="mt-8 grid items-start gap-4 md:grid-cols-2">
            {values.map((value, index) => (
              <details key={value.name} className="value-card">
                <summary>
                  <span className="flex items-center gap-4"><span className="value-number">{index + 1}</span>{value.name}</span>
                  <Plus className="value-plus size-5 shrink-0" />
                </summary>
                <div className="border-t border-border/60 px-6 pb-6 pt-5">
                  <p className="text-sm leading-relaxed text-foreground/70"><strong className="text-foreground">Could mean:</strong> {value.meaning}</p>
                  <p className="mt-4 rounded-xl bg-secondary/60 p-4 text-sm leading-relaxed text-foreground/75"><strong className="text-foreground">Real-life test:</strong> {value.test}</p>
                </div>
              </details>
            ))}
            <div className="new-value-card">
              <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand"><Plus className="size-5" /></span>
              <h3 className="mt-4 font-display text-xl font-semibold">Your value?</h3>
              <p className="mt-2 text-sm text-foreground/60">Add something entirely new on your paper.</p>
            </div>
          </div>
        </section>

        <section id="your-turn" className="workshop-panel section-space p-7 sm:p-12">
          <StepLabel>05 · Your turn</StepLabel>
          <h2 className="section-title max-w-4xl">What do you want to carry from the old Hawky into the next Hawky?</h2>
          <p className="section-intro">At the end of the week, you’ll get a sheet of paper. Don’t write what sounds impressive. Write what feels true.</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, text], index) => (
              <article key={title} className="workshop-step">
                <span className="text-sm font-extrabold text-brand">0{index + 1}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{text}</p>
              </article>
            ))}
          </div>
          <div className="paper-panel mt-6 p-6 sm:p-9">
            <div className="sm:flex sm:items-end sm:justify-between">
              <div><p className="text-xs font-extrabold uppercase text-brand">Your reflection sheet</p><h3 className="mt-2 font-display text-3xl font-semibold">Four prompts. One honest answer.</h3></div>
              <span className="mt-3 inline-block text-sm font-bold text-foreground/45 sm:mt-0">Take your time this week</span>
            </div>
            <ol className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {[
                ["What is the value?", "Serious, playful, weird — whatever feels like Hawky."],
                ["What does it mean here?", "What should it look like in our everyday work?"],
                ["Show me.", "Name a real person, moment or behaviour you’ve seen."],
                ["Why will we need it at 10×?", "What could disappear unless we deliberately protect it?"],
              ].map(([title, text], index) => (
                <li key={title} className="flex gap-4"><span className="prompt-number">{index + 1}</span><div><p className="font-display text-lg font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-foreground/55">{text}</p></div></li>
              ))}
            </ol>
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-display text-lg font-semibold">One final test</p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground/65">Could this value help someone decide what to build, how to treat a customer, how to disagree, how to handle a mistake, or what to do when nobody is watching?</p>
            </div>
          </div>
        </section>

        <section className="section-space pb-12 text-center">
          <StepLabel tone="mint">06 · What happens next?</StepLabel>
          <h2 className="section-title mx-auto max-w-3xl">We don’t want 20 beautiful words.</h2>
          <p className="section-intro mx-auto">We’ll collect everyone’s ideas, find patterns, combine themes, challenge the vague ones, debate the difficult ones — and then vote.</p>
          <p className="closing-statement">The goal is a small set of behaviours we want Hawky to be known for.</p>
        </section>

        <footer className="border-t border-border/60 py-8 text-sm text-foreground/50">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="font-display font-semibold text-foreground">Sources & inspiration</p><div className="mt-3 flex max-w-2xl flex-wrap gap-x-5 gap-y-2">{sources.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-brand">{label}<ArrowUpRight className="size-3" /></a>)}</div></div>
            <p className="font-semibold">Built for the Hawky.ai values workshop.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}