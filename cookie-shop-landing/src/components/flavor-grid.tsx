import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const flavors = [
  {
    name: "Brûléed Vanilla Bean",
    description:
      "Crisp torched sugar shell over Madagascar vanilla custard filling with roasted cocoa nib crumble.",
    badge: "Seasonal",
  },
  {
    name: "Midnight Sea Salt",
    description:
      "72% single-origin dark chocolate layered with smoked sea salt caramel ribbon and rye crumb.",
    badge: "Signature",
  },
  {
    name: "Honeycomb Pistachio",
    description:
      "Local wildflower honey toffee folded into pistachio praline with orange blossom meringue shards.",
    badge: "Limited",
  },
  {
    name: "Golden Milk Snickerdoodle",
    description:
      "Brown butter dough infused with turmeric and cardamom, dusted with chai sugar and vanilla bean glaze.",
    badge: "Vegan",
  },
];

export function FlavorGrid() {
  return (
    <section id="flavors" className="mx-auto max-w-6xl space-y-10">
      <div className="space-y-4 text-center">
        <Badge className="rounded-full bg-secondary/70 px-3 py-1 text-xs font-medium text-secondary-foreground">
          Signature lineup
        </Badge>
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Cookies designed like couture desserts.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Every flavor is carefully layered to balance temperature, texture, and aroma. We source single-origin chocolates,
            small-batch spices, and local farm butter to create flavors you will not find anywhere else.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {flavors.map((flavor) => (
          <Card
            key={flavor.name}
            className="group relative overflow-hidden rounded-3xl border border-transparent bg-gradient-to-br from-white/80 via-white to-secondary/60 p-[1px] shadow-lg shadow-primary/10 transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(239,178,112,0.25),transparent_65%)]" />
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  {flavor.badge}
                </Badge>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
                  Batch crafted
                </span>
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">{flavor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
                {flavor.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
