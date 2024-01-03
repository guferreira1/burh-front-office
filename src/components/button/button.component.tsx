import { ButtonHTMLAttributes } from "react";

interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
}

export const ButtonComponent = ({
  children,
  startIcon,
  ...rest
}: ButtonPropsInterface) => {
  return (
    <>
      <button {...rest}>
        {startIcon}
        {children}
      </button>
    </>
  );
};
