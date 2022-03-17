import { NextPage } from "next";
import { useRecoilValue } from "recoil";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import { isSignUpState } from "../../globalState/isSignUpState";

const signIn: NextPage = () => {
	const isSingUp = useRecoilValue(isSignUpState);

	return <>{isSingUp ? <SignUp /> : <SignIn />}</>;
};

export default signIn;
