import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

const textVariants = cva("font-dm text-black-100 tracking-[var(--type-text-tracking)]", {
  variants: {
    size: {
      lg: "text-[length:var(--type-text-lg-size)] leading-[var(--type-text-lg-line)]",
      md: "text-[length:var(--type-text-md-size)] leading-[var(--type-text-md-line)]",
      sm: "text-[length:var(--type-text-sm-size)] leading-[var(--type-text-sm-line)]",
      xs: "text-[length:var(--type-text-xs-size)] leading-[var(--type-text-xs-line)]",
    },
    weight: {
      regular: "font-normal",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "regular",
  },
});

type TextOwnProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & VariantProps<typeof textVariants>;

type TextProps<T extends ElementType> = TextOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TextOwnProps<T>>;

export function Text<T extends ElementType = "p">({
  as,
  size,
  weight,
  className,
  ...props
}: TextProps<T>) {
  const Component = as ?? "p";

  return (
    <Component className={cn(textVariants({ size, weight }), className)} {...props} />
  );
}

