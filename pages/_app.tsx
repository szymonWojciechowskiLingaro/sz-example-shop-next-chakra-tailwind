import '@styles//globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { chakraTheme } from '@pages/_app/config';
import {useRef, FC} from "react";
import {QueryClient} from "react-query";

const Noop: FC = ({ children }) => <>{children}</>;


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
