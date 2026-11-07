import { ArrowUpRight } from "@/components/icons";
import { Button, type ButtonVariant } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";

export function ActionLink({
  message,
  children,
  variant = "copper",
  className = "",
}: {
  message: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const quiet = variant === "text" || variant === "text-light";

  return (
    <Button href={whatsappHref(message)} external variant={variant} className={className}>
      {children}
      {quiet ? null : <ArrowUpRight />}
    </Button>
  );
}
