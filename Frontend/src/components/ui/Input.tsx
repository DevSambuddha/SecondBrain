import React, { forwardRef } from "react";

export type typeVariant = "text" | "email" | "password";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: typeVariant;
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, ...rest }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="w-full px-2 py-2 border border-gray-200 rounded-md"
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
