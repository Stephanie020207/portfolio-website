import type { ElementType, HTMLAttributes, ReactNode } from "react";

type TypographyFont = "display" | "editorial" | "sans" | "mono";

type TypographyColor =
  | "ink"
  | "paper"
  | "signal-blue"
  | "mist"
  | "ink-soft"
  | "ink-muted"
  | "blue-dark"
  | "blue-soft";

type TypographySize =
  | "display"
  | "heading-01"
  | "heading-02"
  | "heading-03"
  | "heading-04"
  | "heading-05"
  | "heading-06"
  | "title"
  | "body"
  | "reading"
  | "small";

type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  color?: TypographyColor;
  font?: TypographyFont;
  size?: TypographySize;
};

const fontTokens: Record<TypographyFont, string> = {
  display: "var(--font-display)",
  editorial: "var(--font-editorial)",
  sans: "var(--font-sans)",
  mono: "var(--font-mono)",
};

const colorTokens: Record<TypographyColor, string> = {
  ink: "var(--ink)",
  paper: "var(--paper)",
  "signal-blue": "var(--signal-blue)",
  mist: "var(--mist)",
  "ink-soft": "var(--ink-soft)",
  "ink-muted": "var(--ink-muted)",
  "blue-dark": "var(--blue-dark)",
  "blue-soft": "var(--blue-soft)",
};

const sizeClasses: Record<TypographySize, string> = {
  display: "type-display",
  "heading-01": "heading-01",
  "heading-02": "heading-02",
  "heading-03": "heading-03",
  "heading-04": "heading-04",
  "heading-05": "heading-05",
  "heading-06": "heading-06",
  title: "text-title",
  body: "text-body",
  reading: "text-reading",
  small: "text-small",
};

export function Typography({
  as: Component = "p",
  children,
  className,
  color = "ink",
  font = "sans",
  size = "body",
  style,
  ...props
}: TypographyProps) {
  const classes = [sizeClasses[size], className].filter(Boolean).join(" ");

  return (
    <Component
      {...props}
      className={classes}
      style={{
        ...style,
        color: colorTokens[color],
        fontFamily: fontTokens[font],
      }}
    >
      {children}
    </Component>
  );
}
