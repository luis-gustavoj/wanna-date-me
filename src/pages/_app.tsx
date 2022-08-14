import type { AppProps } from 'next/app';

import { globalStyles } from '../styles/stitches';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    {globalStyles()}
    <Component {...pageProps} />
  </>
);

export default MyApp;
