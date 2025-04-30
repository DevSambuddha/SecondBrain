import { useRef } from "react";
import { ButtonLogin } from "../components/ui/ButtonLogin";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const signup = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      email: username,
      password,
    });
    navigate("/signin");
    alert("Signed Up succesfully");
  };
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="flex flex-col bg-white rounded-xl min-w-80 border border-gray-200 p-8 gap-4">
        <h1>Welcome</h1>
        <Input ref={usernameRef} placeholder="Email" type="email" />
        <Input ref={passwordRef} placeholder="Password" type="password" />
        <div className="flex mt-2 justify-center">
          <ButtonLogin
            onClick={signup}
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
