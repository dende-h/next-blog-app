import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import theme from "../theme";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
				<Toaster />
			</ChakraProvider>
		</RecoilRoot>
	);
}

export default MyApp;
