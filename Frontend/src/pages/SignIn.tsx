import axios from "axios";
import { ButtonLogin } from "../components/ui/ButtonLogin";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const signin = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      email: username,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  };
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="flex flex-col bg-white rounded-xl min-w-80 border border-gray-200 p-8 gap-4">
        <h1>Hi 👋</h1>
        <h3>Welcome Back!</h3>
        <Input ref={usernameRef} placeholder="Username" type="email" />
        <Input ref={passwordRef} placeholder="Password" type="password" />
        <div className="flex mt-2 justify-center">
          <ButtonLogin
            onClick={signin}
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
