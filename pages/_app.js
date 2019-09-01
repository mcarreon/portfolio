import React from "react";
import App from "next/app";
import Router from "next/router";
import withGA from "next-ga";
import Header from "../components/header";
import Footer from "../components/footer";
import NProgress from "nprogress";

import "../styles/styles.scss";

Router.events.on('routeChangeStart', url => {
  NProgress.start();
})
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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



  render() {
    
    const { Component, pageProps, path } = this.props;
    
    return (
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    );
  }
}

export default withGA("UA-128281639-1", Router)(MyApp);
