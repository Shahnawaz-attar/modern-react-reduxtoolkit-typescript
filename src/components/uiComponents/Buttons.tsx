import React from "react";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "warning" | "success" | "danger";
  rounded?: boolean;
  type?: "outline";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  rest?: Record<string, any>;
}

const Buttons: React.FC<Props> = ({
  children,
  color,
  rounded,
  type,
  onClick,
  ...rest
}) => {
  const buttonClasses = classNames(
    "text-white",
    "font-medium",
    "py-2",
    "px-4",
    "mx-2",
    "rounded-md",
    { "bg-blue": color === "primary" },
    { "bg-gray": color === "secondary" },
    { "bg-yellow": color === "warning" },
    { "bg-green": color === "success" },
    { "bg-red": color === "danger" },
    {
      "text-white bg-blue-500 hover:bg-primary-600":
        type === "outline" && color === "primary",
    },
    {
      "text-white bg-gray-500 hover:bg-secondary-600":
        type === "outline" && color === "secondary",
    },
    {
      "text-white bg-yellow-500 hover:bg-warning-600":
        type === "outline" && color === "warning",
    },
    {
      "text-white bg-green-500 hover:bg-success-600":
        type === "outline" && color === "success",
    },
    {
      "text-white bg-red-500 hover:bg-danger-600":
        type === "outline" && color === "danger",
    },
    { "rounded-full": rounded }
  );

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Buttons;
