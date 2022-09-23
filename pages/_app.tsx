import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { Toaster } from "react-hot-toast";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    // Higher order component
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
