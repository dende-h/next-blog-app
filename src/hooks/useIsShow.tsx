import { useState } from "react";

export const useIsShow = () => {
	const [isShow, setIsShow] = useState(false);
	const onClickShow = () => {
		setIsShow(!isShow);
	};
	return { isShow, onClickShow };
};
