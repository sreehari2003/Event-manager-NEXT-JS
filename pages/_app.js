import "../styles/globals.css";
import Layout from "../components/layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
