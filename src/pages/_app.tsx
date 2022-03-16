import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import theme from "../theme";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import MainHeaderLayout from "../templates/MainHeaderLayout";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<ChakraProvider resetCSS theme={theme}>
				<MainHeaderLayout>
					<Component {...pageProps} />
					<Toaster />
				</MainHeaderLayout>
			</ChakraProvider>
		</RecoilRoot>
	);
}

export default MyApp;
