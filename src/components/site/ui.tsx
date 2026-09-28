import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ActionProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  size?: "md" | "lg";
  target?: string;
  rel?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const sizes = {
  md: "px-5 py-3 text-[0.6875rem]",
  lg: "px-7 py-4 text-xs",
};

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-[var(--shadow-red)] active:translate-y-px",
  outline:
    "border border-border-strong text-foreground hover:border-primary hover:bg-primary/10",
  ghost: "text-muted-foreground hover:text-foreground",
};

export function Action({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  target,
  rel,
}: ActionProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </a>
  );
}

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("label-micro flex items-center gap-3", className)}>
      <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "display-lg mt-6 text-[2.15rem] sm:text-5xl lg:text-[4rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-sm border border-dashed border-border-strong px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
      {children}
    </span>
  );
}
