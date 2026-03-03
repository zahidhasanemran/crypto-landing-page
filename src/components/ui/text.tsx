import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

const textVariants = cva("font-dm text-black-100", {
  variants: {
    size: {
      lg: "type-text-lg",
      md: "type-text-md",
      sm: "type-text-sm",
      xs: "type-text-xs",
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
