import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Welcome to Second Brain</h1>
      </div>
      <div>
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};
