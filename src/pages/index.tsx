import Amplify from "aws-amplify";
import { useRecoilValue } from "recoil";
import awsmobile from "../aws-exports";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { isSignUpState } from "../globalState/isSignUpState";
Amplify.configure(awsmobile);

const Index = () => {
	const isSingUp = useRecoilValue(isSignUpState);

	return <>{isSingUp ? <SignUp /> : <SignIn />}</>;
};

export default Index;
