import { Separator } from "@/components/ui/separator";

const highlights = [
  {
    title: "Farm to oven sourcing",
    description:
      "We work with Hudson Valley dairy farms, single-origin cacao cooperatives, and spice importers who handpick each harvest.",
  },
  {
    title: "Temperature choreography",
    description:
      "Each cookie experiences five temperature stages to achieve our signature caramelized edges and molten heart.",
  },
  {
    title: "Zero shortcuts",
    description:
      "We mill our own flour blends, whip house-made marshmallow, and temper chocolate in micro-batches every morning.",
  },
];

export function Story() {
  return (
    <section
      id="story"
      className="mx-auto max-w-6xl rounded-[2.5rem] border border-border/60 bg-white/70 px-6 py-16 shadow-2xl shadow-primary/10 backdrop-blur sm:px-12"
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/90">Our method</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A pastry chef-led atelier inspired by the intimacy of a dessert bar.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Golden Crumb is helmed by Michelin-trained pastry chefs who believe nostalgia deserves haute-cuisine attention.
            Every cookie passes through aromatic infusions, hand-brûléed finishes, and meticulous packaging designed to arrive warm.
          </p>
          <div className="rounded-3xl bg-secondary/70 p-6 text-sm text-secondary-foreground">
            <p>
              &ldquo;We craft cookies the way sommeliers curate cellars—seasonally, intentionally, and obsessively,&rdquo; says founder
              and executive pastry chef Elise Moreau.
            </p>
          </div>
        </div>
        <div className="space-y-10">
          {highlights.map((item, index) => (
            <div key={item.title} className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-content-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
              </div>
              <p className="pl-12 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.description}</p>
              {index < highlights.length - 1 && <Separator className="ml-12 h-[2px] bg-border/70" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
