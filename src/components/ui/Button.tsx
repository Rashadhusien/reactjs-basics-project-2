import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit" | "flex-1";
}

const Button = ({ children, className, width, ...rest }: IProp) => {
  // console.log({ rest });
  return (
    <button
      className={`${className} ${width}  p-2 rounded-lg text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
