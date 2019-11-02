// Polyfills
// ======================
import "../polyfills.js";

// App
// ======================
import App, { Container } from "next/app";
import React from "react";
// Redux support
import { Provider } from "react-redux";

//Amplify support
import Amplify from "aws-amplify";
import awsconfig from "@/aws-exports";
import { Authenticator, Greetings } from "aws-amplify-react";
Amplify.configure(awsconfig);

import withReduxStore from "../store/with-redux-store";
// Translation support
import * as Translate from "@/components/Common/Translate";
// Base Layout
import Base from "@/components/Layout/Base";
// import BaseHorizontal from '@/components/Layout/BaseHorizontal';

// Global Vendor
// ======================
// Whirl
import "whirl/dist/whirl.css";
// Font Awesome
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/regular.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
// Animate.CSS
import "animate.css/animate.min.css";
// Simple line icons
import "simple-line-icons/css/simple-line-icons.css";
// Weather Icons
import "weather-icons/css/weather-icons.min.css";
import "weather-icons/css/weather-icons-wind.min.css";

// App Styes
// ======================
import "../styles/bootstrap.scss";
import "../styles/app.scss";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Head from "@/components/Layout/Head";
// https://nextjs.org/docs/#custom-app
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    console.log("pageProps for App", pageProps);
    // Require the initial dictionary.
    // Use require to avoid 'fs' module
    //  Translate.setDict("en", require("@/static/locales/en/translations.json"));
    // The store has been updated in previous call,
    // pass it down as initial prop so client can use it.
    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    const Layout = Component.Layout || Base;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Head />
          <Authenticator hide={[Greetings]}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Authenticator>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
