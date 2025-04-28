export interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input = ({ onChange, placeholder }: InputProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-2 py-2 border border-gray-200 rounded-md"
        onChange={onChange}
      />
    </div>
  );
};
