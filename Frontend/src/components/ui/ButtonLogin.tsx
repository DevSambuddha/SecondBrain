import { ButtonProps, sizeStyle, variantStyle } from "./Buttons";

export interface ButtonLogin extends ButtonProps {
  loading?: boolean;
}

const defaultStyle =
  "flex px-4 py-2  rounded-md font-light justify-center items-center";
export const ButtonLogin = (props: ButtonLogin) => {
  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        // disabled={props.loading}
        className={`${variantStyle[props.variant]} ${
          sizeStyle[props.size]
        } ${defaultStyle} ${props.fullWidth ? "w-full" : ""} ${
          props.loading ? "opacity-45" : "cursor-pointer"
        }`}
      >
        {props.IconFirst ? <div className="pr-2">{props.IconFirst}</div> : null}
        {props.loading ? "Loading..." : props.text}
        {props.IconLast ? <div className="pl-2">{props.IconLast}</div> : null}
      </button>
    </>
  );
};
