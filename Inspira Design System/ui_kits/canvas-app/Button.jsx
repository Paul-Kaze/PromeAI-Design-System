// Button.jsx — Inspira button variants. Radius 9px, Poppins 14/500.
const Button = ({
  variant = "primary",
  size = "md",
  disabled,
  children,
  iconLeft,
  iconRight,
  onClick,
  style,
  ...rest
}) => {
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: variant === "primary" ? 600 : 500,
    fontSize: size === "sm" ? 12 : 14,
    lineHeight: 1.2,
    padding: size === "sm" ? "6px 10px" : "8px 16px",
    borderRadius: 9,
    border: "1px solid transparent",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
  };
  const styles = {
    primary: { ...base, background: "var(--gradient-brand)", color: "#fff", border: 0 },
    secondary: { ...base, background: "var(--bg-3)", color: "var(--fg-2)", borderColor: "var(--border-4)" },
    white: { ...base, background: "#fff", color: "#000" },
    ghost: { ...base, background: "transparent", color: "var(--fg-2)" },
    danger: { ...base, background: "rgba(255,67,67,0.12)", color: "#FF7A7A", borderColor: "rgba(255,67,67,0.3)" },
  };
  return (
    <button
      className={`btn btn-${variant}`}
      style={{ ...styles[variant], ...style }}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

Object.assign(window, { Button });
