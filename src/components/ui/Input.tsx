import { InputHTMLAttributes } from "react";

interface IProp extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProp) => {
  return <input {...rest} />;
};
export default Input;
