import { useMessages } from "next-intl";
import SignUpComponent from "../../components/SignUp/SignUpComponent";

const SignUpPage = () => {
  const t = useMessages("SignUp");
  return <SignUpComponent t={t.SignUp} />;
};

export default SignUpPage;
