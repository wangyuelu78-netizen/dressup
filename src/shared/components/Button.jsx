export default function Button({
  children,
  className = "",
  variant = "default",
  type = "button",
  ...props
}) {
  const variantClass = variant === "default" ? "" : ` button-${variant}`;

  return (
    <button className={`button${variantClass} ${className}`.trim()} type={type} {...props}>
      {children}
    </button>
  );
}
