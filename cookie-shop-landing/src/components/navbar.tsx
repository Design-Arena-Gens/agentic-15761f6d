"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "#flavors", label: "Signature Flavors" },
  { href: "#story", label: "Our Story" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Sweet Words" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-content-center rounded-full bg-gradient-to-tr from-primary/80 via-primary to-primary/70 text-primary-foreground shadow-lg shadow-primary/40">
            🍪
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-tight text-foreground">Golden Crumb</span>
            <span className="text-xs text-muted-foreground">Small batch cookie atelier</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <NavigationMenu orientation="horizontal" className="bg-transparent shadow-none">
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      "rounded-full px-4 py-2 font-medium transition-colors",
                      "hover:bg-secondary hover:text-secondary-foreground",
                      pathname === link.href ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" className="rounded-full px-6">
            View Menu
          </Button>
          <Button className="rounded-full px-6 shadow-lg shadow-primary/30">
            Order Now
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur-xl">
            <SheetHeader>
              <SheetTitle className="text-left">Golden Crumb</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button variant="secondary" className="rounded-full px-6">
                  View Menu
                </Button>
                <Button className="rounded-full px-6">Order Now</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
