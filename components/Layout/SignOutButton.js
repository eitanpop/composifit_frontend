import React from "react";
import { Auth } from "aws-amplify";

export default () => (
  <button onClick={() => Auth.signOut()}>Sign Out</button>
);
