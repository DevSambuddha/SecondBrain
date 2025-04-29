export type typeVariant = "text" | "email" | "password";
export interface InputProps {
  type: typeVariant;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input = (props: InputProps) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="w-full px-2 py-2 border border-gray-200 rounded-md"
        onChange={props.onChange}
      />
    </div>
  );
};
