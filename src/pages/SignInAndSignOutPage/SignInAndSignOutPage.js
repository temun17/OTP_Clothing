import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./SignInAndSignOutPage.scss";

const SignInAndSignOutPage = () => {
  return (
    <div className="sign-in-and-sign-out">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignOutPage;
