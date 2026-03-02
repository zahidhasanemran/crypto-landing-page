import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-dm text-black-100",
  {
    variants: {
      level: {
        h1: "text-[length:var(--type-heading-h1-size)] leading-[var(--type-heading-h1-line)] tracking-[var(--type-heading-h1-tracking)] font-medium",
        h2: "text-[length:var(--type-heading-h2-size)] leading-[var(--type-heading-h2-line)] tracking-[var(--type-heading-h2-tracking)] font-medium",
        h3: "text-[length:var(--type-heading-h3-size)] leading-[var(--type-heading-h3-line)] tracking-[var(--type-heading-h3-tracking)] font-medium",
        h4: "text-[length:var(--type-heading-h4-size)] leading-[var(--type-heading-h4-line)] tracking-[var(--type-heading-h4-tracking)] font-medium",
        h5: "text-[length:var(--type-heading-h5-size)] leading-[var(--type-heading-h5-line)] tracking-[var(--type-heading-h5-tracking)] font-medium",
        h6: "text-[length:var(--type-heading-h6-size)] leading-[var(--type-heading-h6-line)] tracking-[var(--type-heading-h6-tracking)] font-medium",
      },
    },
    defaultVariants: {
      level: "h2",
    },
  }
);

type HeadingLevel = NonNullable<VariantProps<typeof headingVariants>["level"]>;

type HeadingOwnProps<T extends ElementType> = {
  as?: T;
  level?: HeadingLevel;
  className?: string;
};

type HeadingProps<T extends ElementType> = HeadingOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof HeadingOwnProps<T>>;

export function Heading<T extends ElementType = "h2">({
  as,
  level = "h2",
  className,
  ...props
}: HeadingProps<T>) {
  const Component = as ?? level;

  return (
    <Component className={cn(headingVariants({ level }), className)} {...props} />
  );
}
