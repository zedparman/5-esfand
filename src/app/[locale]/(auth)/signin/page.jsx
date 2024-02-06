import React from "react";
import { useMessages } from "next-intl";
import SignInComponent from "../../components/SignIn/SignInComponent";

const SignInPage = () => {
  const t = useMessages("SignIn");

  return <SignInComponent t={t.SignIn} />;
};

export default SignInPage;
