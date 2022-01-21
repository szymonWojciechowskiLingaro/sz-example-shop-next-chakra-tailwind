import '@styles/tailwind.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { chakraTheme } from '@pages/_app/config'
import { useRef, FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ManagedUIContext } from '@contexts/ui.context'
import ManagedModal from '@components/common/modal/managed-modal'
import Drawer from '@components/common/drawer'

const Noop: FC = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const queryClientRef = useRef<any>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  const Layout = (Component as any).Layout || Noop

  return (
    <ChakraProvider theme={chakraTheme}>
      <QueryClientProvider client={queryClientRef.current}>
        <ManagedUIContext>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} key={router.route} />
          </Layout>
          <ManagedModal />
          <Drawer />
        </ManagedUIContext>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
