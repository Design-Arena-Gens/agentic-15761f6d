import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    heading: "Visit",
    items: [
      { label: "Brooklyn Atelier", href: "#" },
      { label: "Chef's Table", href: "#" },
      { label: "Wholesale", href: "#" },
    ],
  },
  {
    heading: "Discover",
    items: [
      { label: "Flavor Journal", href: "#" },
      { label: "Gift Concierge", href: "#" },
      { label: "Corporate Gifting", href: "#" },
    ],
  },
  {
    heading: "Connect",
    items: [
      { label: "Press", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-content-center rounded-full bg-gradient-to-tr from-primary/90 via-primary to-primary/70 text-2xl shadow-lg shadow-primary/40">
                🍪
              </span>
              <div className="space-y-1">
                <p className="text-xl font-semibold tracking-tight text-foreground">Golden Crumb Atelier</p>
                <p className="text-sm text-muted-foreground">Luxury cookies born from pastry artistry.</p>
              </div>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              327 Wythe Avenue, Brooklyn NY · Open Thursday through Sunday · Private tastings by appointment only.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((column) => (
              <div key={column.heading} className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {column.heading}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="transition-colors hover:text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator className="my-10 bg-border/70" />
        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Golden Crumb Atelier. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="hover:text-primary">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
