import { Auth } from "aws-amplify";
import Router from "next/router";
import { useSetRecoilState } from "recoil";

const Mypage = () => {
	const signOut = async () => {
		try {
			await Auth.signOut();

			Router.push("/sign-in");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>Mypage</h1>
			logdIn
			<button onClick={signOut}>ログアウト</button>
		</div>
	);
};
export default Mypage;
