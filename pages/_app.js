import React from "react";
import App from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/styles.scss";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  static async getInitialProps({ Component, router, ctx }) {
    return { path: ctx.asPath }
  }


  render() {
    
    const { Component, pageProps, path } = this.props;
    
    return (
      <div>
        <Header route={path}/>
        <Component {...pageProps} />
        <Footer />
      </div>
    );
  }
}

export default MyApp;
