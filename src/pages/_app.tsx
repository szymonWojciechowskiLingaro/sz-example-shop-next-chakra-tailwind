import '@styles/globals.css';
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
  const Layout = (Component as any).Layout || Noop;

  return (
    <ChakraProvider theme={chakraTheme}>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;