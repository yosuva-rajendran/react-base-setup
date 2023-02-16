import { FC } from "react";

interface IButton {
  value?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  textColor?: string;
  rounded?: string;
  width?: string;
  size?: string;
  margin?: string;
  color?: string;
}

const Button: FC<IButton> = ({
  value,
  type,
  onClick,
  color,
  textColor,
  rounded,
  width,
  size = "p-2",
  margin,
}) => {
  if (size) {
    switch (size) {
      case "sm":
        size = "p-1";
        break;
      case "lg":
        size = "p-3";
        break;
    }
  }
  const className = `m-0 ${width} text-${textColor} bg-${color} ${rounded} ${size} ${margin} hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
  return (
    <button className={className} type={type} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
