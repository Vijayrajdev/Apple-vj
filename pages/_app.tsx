import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../Redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Higher order components
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
