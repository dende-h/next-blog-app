import { Auth } from "aws-amplify";

const ConfirmSignUp = () => {

const confirmSignUp = async()=>{
  try{
    await Auth.confirmSignUp(username,code);
  }
catch(error){
  console.log('error confirming sign up', error);
}

	return <></>;
};
export default ConfirmSignUp;
