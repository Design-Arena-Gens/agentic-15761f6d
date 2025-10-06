import { Flame, Package, Truck, Wand2 } from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon: typeof Wand2;
};

const steps: Step[] = [
  {
    title: "Curated tasting menu",
    description: "Choose from chef-led tasting boxes or build a bespoke assortment suited to your event or mood.",
    icon: Wand2,
  },
  {
    title: "Fire & finish",
    description:
      "Cookies bake in hearth-deck ovens, then receive torched sugar shells, hand-painted cocoa butter, and dusted spice.",
    icon: Flame,
  },
  {
    title: "Artful packaging",
    description:
      "Each order is layered with botanical wraps, aroma-preserving sachets, and handwritten tasting notes.",
    icon: Package,
  },
  {
    title: "Same-day handoff",
    description:
      "Courier delivery within NYC or overnight nationwide shipping with temperature-controlled insulation.",
    icon: Truck,
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl space-y-10">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">The Golden Crumb experience.</h2>
        <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
          From selection to final bite, every detail is choreographed to heighten anticipation. We fuse hospitality with haute
          patisserie to deliver a multisensory moment in every box.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-white/60 p-8 shadow-lg shadow-primary/10 transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="absolute -top-20 right-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-transform duration-500 group-hover:translate-y-6" />
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-content-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
