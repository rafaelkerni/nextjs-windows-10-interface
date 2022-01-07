import * as React from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { CacheProvider, EmotionCache } from '@emotion/react'

import createEmotionCache from '@/lib/createEmotionCache'
import { wrapper } from '@/store/index'
import theme from '@/styles/theme'

import Loading from './loading'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const App = (props: MyAppProps) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps
  } = props

  const store = useStore(state => state)

  return (
    <PersistGate persistor={store.__persistor} loading={<Loading />}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Windows 10</title>
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </PersistGate>
  )
}

export default wrapper.withRedux(App)
