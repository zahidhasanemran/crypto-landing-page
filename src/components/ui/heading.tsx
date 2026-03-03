import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-dm text-black-100",
  {
    variants: {
      level: {
        h1: "type-heading-h1 font-medium",
        h2: "type-heading-h2 font-medium",
        h3: "type-heading-h3 font-medium",
        h4: "type-heading-h4 font-medium",
        h5: "type-heading-h5 font-medium",
        h6: "type-heading-h6 font-medium",
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
