import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import theme from "../theme";
import { AppProps } from "next/app";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
