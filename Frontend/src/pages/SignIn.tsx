import { ButtonLogin } from "../components/ui/ButtonLogin";
import { Input } from "../components/ui/Input";

export const SignIn = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="flex flex-col bg-white rounded-xl min-w-80 border border-gray-200 p-8 gap-4">
        <h1>Hi 👋</h1>
        <h3>Welcome Back!</h3>
        <Input placeholder="Username" type="email" />
        <Input placeholder="Password" type="password" />
        <div className="flex mt-2 justify-center">
          <ButtonLogin
            variant="primary"
            text="Sign In"
            size="md"
            fullWidth={true}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
};
