import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type StyleProps = { variant?: "primary" | "secondary" };
export type ButtonProps = StyleProps & (
  | (ComponentPropsWithoutRef<"button"> & { href?: never })
  | (ComponentPropsWithoutRef<typeof Link> & { href: string })
);
export default function Button(props: ButtonProps) {
  if (typeof props.href === "string") {
    const { variant = "primary", className, ...linkProps } = props;
    return <Link className={cn("button", `button-${variant}`, className)} {...linkProps} />;
  }
  const { variant = "primary", className, type = "button", ...buttonProps } = props;
  return <button type={type} className={cn("button", `button-${variant}`, className)} {...buttonProps} />;
}
