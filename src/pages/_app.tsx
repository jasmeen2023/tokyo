import { CacheProvider, EmotionCache } from '@emotion/react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CssBaseline from '@mui/material/CssBaseline';
import type { NextPage } from 'next';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import { ReactElement, ReactNode, useState } from 'react';
import { Cookies, CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'nprogress/nprogress.css';

import { SidebarProvider } from '@/contexts/SidebarContext';
import createEmotionCache from '@/createEmotionCache';
import ThemeProvider from '@/theme/ThemeProvider';

const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface TokyoAppProps extends AppProps {
  emotionCache?: EmotionCache;
  cookies: any;
  Component: NextPageWithLayout;
}

type AppOwnProps = { cookies: any };

export default function TokyoApp(props: TokyoAppProps) {
  const isBrowser = typeof window !== 'undefined';
  const [queryClient] = useState(() => new QueryClient());
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    cookies,
  } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);

  return (
    <CookiesProvider cookies={isBrowser ? undefined : new Cookies(cookies)}>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>Tokyo Free Black NextJS Typescript Admin Dashboard</title>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1, shrink-to-fit=no'
            />
          </Head>
          <SidebarProvider>
            <ThemeProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
              </LocalizationProvider>
            </ThemeProvider>
          </SidebarProvider>
        </CacheProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

TokyoApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx, cookies: context.ctx.req?.headers.cookie };
};
