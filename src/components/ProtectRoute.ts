import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { isAuthenticatedState } from "../globalState/isAuthenticatedState";

export const ProtectRoute = ({ children }) => {
	const isAuthenticated = useRecoilValue(isAuthenticatedState);

	const router = useRouter();

	if (!isAuthenticated) {
		if (typeof window !== "undefined") {
			router.push("/");
		}
	}
	return children;
};
