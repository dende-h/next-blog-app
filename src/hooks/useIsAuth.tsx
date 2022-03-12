import { Auth } from "aws-amplify";
import { useState } from "react";

export const useIsAuth = () => {
	const [user, setUser] = useState("");
	const isAuth = async () => {
		const currentUser = await Auth.currentAuthenticatedUser();
		try {
			setUser(currentUser);
		} catch (error) {
			console.log(error);
			setUser("");
		}
	};
	return { isAuth, user };
};
