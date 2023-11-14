import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import "../app/globals.css";
import Layout from "@/components/layout";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
