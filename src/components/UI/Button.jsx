const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...restProps
}) => {
  // Define Tailwind CSS classes based on variant and size
  const variantClasses = {
    primary: "bg-yellow-primary hover:bg-yellow-primary/80 text-white",
  };

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-[10px] px-6 text-base",
    // Add more sizes as needed
  };

  // Combine classes based on the selected variant and size
  const buttonClasses = `rounded-md capitalize font-medium transition-colors flex items-center gap-2 ${variantClasses[variant]} ${sizeClasses[size]}`;

  return (
    <button className={buttonClasses} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
