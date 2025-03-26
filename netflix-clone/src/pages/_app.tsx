import type { AppProps } from "next/app";
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { GlobalStyles } from "@/styles/globalStyles";

const cache = createCache({ key: 'next' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </CacheProvider>
  );
}
