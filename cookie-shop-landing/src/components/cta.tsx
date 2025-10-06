import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-border/60 bg-gradient-to-br from-primary via-primary/80 to-primary/70 p-[1px] shadow-2xl shadow-primary/30">
      <div className="rounded-[2.8rem] bg-white/90 px-8 py-16 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-sm sm:px-16">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80">From our oven to your table</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Reserve your next Golden Crumb drop before it sells out.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Drops open every Thursday at noon EST. Join the insider list for private tasting invitations and first access to
            limited releases.
          </p>
          <form className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Your email address"
              required
              className="h-12 rounded-full bg-white/70 px-5 text-base shadow-inner shadow-primary/20"
            />
            <Button type="submit" className="h-12 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/30">
              Join the list
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
