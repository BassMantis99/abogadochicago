import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-orange hover:bg-orange-hover text-white font-bold rounded-md shadow-cta hover:-translate-y-px px-7 py-3.5 inline-flex items-center gap-2.5 transition-all",
  secondary:
    "bg-transparent text-white border-[1.5px] border-white/25 hover:border-white/50 font-bold rounded-md px-7 py-3.5 inline-flex items-center gap-2.5 transition-all",
  ghost:
    "text-orange font-bold inline-flex items-center gap-2 hover:gap-3 transition-all",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:");
  const classes = `${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {icon}
        {children}
        {variant === "ghost" && <ArrowRightIcon />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
      {variant === "ghost" && <ArrowRightIcon />}
    </Link>
  );
}
