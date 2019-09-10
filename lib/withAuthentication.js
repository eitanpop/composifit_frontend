import React, { useEffect } from "react";
import { Auth } from "aws-amplify"
import { thisExpression } from "babel-types";

export default async Component => {
   const user =  await Auth.currentAuthenticatedUser();
   return Component;

};
