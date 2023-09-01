import { forwardRef, type HTMLAttributes } from "react";

import type { HTMLTextElement } from "@/lib/types";

type TextProps = HTMLAttributes<HTMLTextElement> & {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};

export const Text = forwardRef<HTMLTextElement, TextProps>(
  ({ className, variant, ...props }, ref) => {
    const Component = variant;
    return <Component ref={ref} className={className} {...props} />;
  }
);

Text.displayName = "Text";
