import { ButtonLogin } from "../components/ui/ButtonLogin";
import { Input } from "../components/ui/Input";

export const SignUp = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="flex flex-col bg-white rounded-xl min-w-80 border border-gray-200 p-8 gap-4">
        <h1>Welcome</h1>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <div className="flex mt-2 justify-center">
          <ButtonLogin
            variant="primary"
            text="Sign Up"
            size="md"
            fullWidth={true}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
};
