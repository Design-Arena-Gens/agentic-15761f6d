import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sofia Marquez",
    title: "Food Editor, Bon Vivant Magazine",
    quote:
      "Golden Crumb marries the precision of fine dining desserts with the comfort of childhood treats. The textures are mind-bending, the flavors transportive.",
  },
  {
    name: "Chef André Beaumont",
    title: "Executive Chef, Maison Beaumont",
    quote:
      "The layered caramelization and balance of salt to sweet is extraordinary. These cookies stand shoulder to shoulder with plated haute cuisine desserts.",
  },
  {
    name: "Lena Carter",
    title: "Event Curator, Maison Flora",
    quote:
      "Our clients now expect Golden Crumb at every gathering. The packaging, aroma, and storytelling elevate each event experience.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl space-y-10">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Sweet words from connoisseurs.</h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          Golden Crumb has been featured by James Beard Award-winning chefs, luxury event planners, and culinary publications.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card
            key={item.name}
            className="relative h-full overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-white via-secondary/40 to-secondary/70 p-1 shadow-xl shadow-primary/10"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(186,137,86,0.18),transparent_65%)]" />
            <CardContent className="flex h-full flex-col gap-6 rounded-[1.7rem] bg-white/80 p-6 backdrop-blur">
              <p className="text-lg leading-relaxed text-foreground">“{item.quote}”</p>
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-primary">{item.name}</p>
                <p className="text-muted-foreground">{item.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
