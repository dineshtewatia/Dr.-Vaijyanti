import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
  inverse = false
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
  inverse?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={center ? "gold-line mx-auto mb-5" : "gold-line mb-5"} />
      <p className={inverse ? "text-sm font-bold uppercase tracking-[0.22em] text-accent" : "text-sm font-bold uppercase tracking-[0.22em] text-secondary"}>{eyebrow}</p>
      <h2 className={inverse ? "mt-3 font-serif text-3xl font-semibold tracking-normal text-white md:text-5xl" : "clinic-gradient-text mt-3 font-serif text-3xl font-semibold tracking-normal md:text-5xl"}>{title}</h2>
      {children ? <p className={inverse ? "mt-5 text-base leading-8 text-white/72 md:text-lg" : "mt-5 text-base leading-8 text-muted-foreground md:text-lg"}>{children}</p> : null}
    </div>
  );
}
