import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

const paragraphVariants = cva(
  "font-dm text-black-100 tracking-[var(--type-paragraph-tracking)]",
  {
  variants: {
    size: {
      lg: "text-[length:var(--type-paragraph-lg-size)] leading-[var(--type-paragraph-lg-line)]",
      md: "text-[length:var(--type-paragraph-md-size)] leading-[var(--type-paragraph-md-line)]",
      sm: "text-[length:var(--type-paragraph-sm-size)] leading-[var(--type-paragraph-sm-line)]",
      xs: "text-[length:var(--type-paragraph-xs-size)] leading-[var(--type-paragraph-xs-line)]",
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

type ParagraphOwnProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & VariantProps<typeof paragraphVariants>;

type ParagraphProps<T extends ElementType> = ParagraphOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ParagraphOwnProps<T>>;

export function Paragraph<T extends ElementType = "p">({
  as,
  size,
  weight,
  className,
  ...props
}: ParagraphProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      className={cn(paragraphVariants({ size, weight }), className)}
      {...props}
    />
  );
}
