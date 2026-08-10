import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd";

type ButtonProps = Omit<AntButtonProps, "type" | "variant"> & {
  variant?: "signal" | "ghost";
};

/**
 * Thin wrapper around antd's Button that applies the portfolio's
 * signature glow (primary) or hairline outline (ghost) treatment.
 */
export default function Button({ variant = "signal", className, ...rest }: ButtonProps) {
  const variantClass = variant === "signal" ? "btn-signal" : "btn-ghost";
  const buttonType = variant === "signal" ? "primary" : "default";

  return (
    <AntButton
      type={buttonType}
      size="large"
      className={[variantClass, className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
}
