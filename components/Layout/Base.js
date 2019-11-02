import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Offsidebar from "./Offsidebar";
import Footer from "./Footer";
import SettingsProvider from "./SettingsProvider";
import ThemesProvider from "./ThemesProvider";

const Base = props => {
  console.log("authState",props.authState)
  const {authState } = props;
   if (authState === "signIn" || authState === "loading" || authState==="signUp" || authState ==="confirmSignUp" || authState==="signedUp")
    return <div />;
  return (
    <ThemesProvider>
      <SettingsProvider>
        <div className="wrapper">
          <Header />

          <Sidebar />

          <Offsidebar />

          <section className="section-container">{props.children}</section>

          <Footer />
        </div>
      </SettingsProvider>
    </ThemesProvider>
  );
};

export default Base;
