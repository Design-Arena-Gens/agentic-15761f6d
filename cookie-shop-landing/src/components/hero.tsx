import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const stats = [
  { value: "12k+", label: "Happy dessert lovers" },
  { value: "48h", label: "From oven to doorstep" },
  { value: "23", label: "Seasonal recipes" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[3rem] border border-border/60 bg-gradient-to-br from-primary/15 via-background to-secondary/80 px-6 pb-12 pt-16 shadow-xl shadow-primary/10 sm:px-12 md:px-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[12%] h-32 w-32 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute right-[12%] top-[18%] h-40 w-40 rounded-full bg-accent/50 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[45%] h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_60%)]" />
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(320px,_400px)]">
        <div className="space-y-7">
          <Badge className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground/80 shadow-sm shadow-secondary/80">
            Crafted daily in our Brooklyn bakery
          </Badge>
          <div className="space-y-4">
            <h1 className={cn("text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl")}>An artisan cookie experience baked to golden perfection.</h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We blend French techniques with nostalgic flavors to create small-batch cookies finished with hand-painted chocolates and sun-kissed caramel. Your new obsession is fresh out of the oven.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/30">
              Order The Signature Box
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full px-8 py-6 text-base text-primary shadow-none hover:bg-primary/10"
            >
              Explore the Atelier
            </Button>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-white/50 p-4 text-center shadow-sm shadow-primary/10 backdrop-blur">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto flex w-full max-w-[22rem] items-center justify-center">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] border border-border/70 bg-gradient-to-br from-secondary via-background to-background shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_70%)]" />
            <div className="absolute inset-x-8 top-8 rounded-[2rem] bg-white/80 shadow-lg shadow-primary/20 backdrop-blur-lg">
              <div className="space-y-6 p-8">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Golden Series</span>
                    <span>Batch 104</span>
                  </div>
                  <p className="text-2xl font-semibold text-foreground">Triple brown butter pecan</p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>Smoked pecan praline folded into caramelized dough, dipped in Tahitian vanilla ganache and kissed with gold dust.</p>
                  <div className="flex items-center justify-between rounded-2xl bg-secondary/70 px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-secondary-foreground">
                    <span>Limited Release</span>
                    <span>7-day window</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex -space-x-3">
                    {["/avatars/1.png", "/avatars/2.png", "/avatars/3.png"].map((avatar, index) => (
                      <span
                        key={avatar}
                        style={{ zIndex: 10 - index }}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-gradient-to-br from-[#dba982] to-[#a46a45] text-sm font-semibold text-white shadow-md shadow-primary/20"
                      >
                        {index === 0 ? "MJ" : index === 1 ? "KT" : "LS"}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">1,200+ five-star reviews from dessert connoisseurs</p>
                </div>
              </div>
            </div>
            <div className="absolute -left-10 bottom-10 hidden h-32 w-32 rotate-[15deg] rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-2xl shadow-primary/50 lg:block" />
            <div className="absolute -right-6 top-12 hidden h-20 w-20 rotate-[30deg] rounded-[2rem] bg-gradient-to-br from-primary/70 via-primary to-primary/50 shadow-xl shadow-primary/40 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
