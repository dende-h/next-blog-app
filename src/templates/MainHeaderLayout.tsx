import { memo, ReactNode, VFC } from "react";

import { MainHeader } from "../components/molecule/MainHeader";

type Props = {
	children: ReactNode;
};

const MainHeaderLayout: VFC<Props> = memo((props: Props) => {
	const { children } = props;
	return (
		<>
			<MainHeader />
			{children}
		</>
	);
});
export default MainHeaderLayout;
