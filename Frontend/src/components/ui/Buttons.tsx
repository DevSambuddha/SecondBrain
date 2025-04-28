import { ReactElement } from "react";

export type ButtonVariant = "primary" | "secondary";
export interface ButtonProps {
  variant: ButtonVariant;
  text: string;
  size: "sm" | "md" | "lg";
  IconFirst?: ReactElement;
  IconLast?: ReactElement;
  onClick?: () => void;
}

const variantStyle = {
  primary: " bg-(--color-primary) text-(--color-text)",
  secondary: "bg-(--color-secondary) text-(--color-text-secondary)",
};
const sizeStyle = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};
const defaultStyle =
  "flex px-4 py-2  rounded-md font-light justify-center items-center cursor-pointer";
const Buttons = (props: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        className={`${variantStyle[props.variant]} ${
          sizeStyle[props.size]
        } ${defaultStyle}`}
      >
        {props.IconFirst ? <div className="pr-2">{props.IconFirst}</div> : null}
        {props.text}
        {props.IconLast ? <div className="pl-2">{props.IconLast}</div> : null}
      </button>
    </>
  );
};

export default Buttons;
