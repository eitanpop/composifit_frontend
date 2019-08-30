import gql from "graphql-tag";

import getParameterizedGql from "./getParamaterizedGql";

export const getUserSets = (...params) =>
  getParameterizedGql(params, parameters => {
    return gql`
    query GetUserSets($mesoId: Int!, $date: String) {
      getUserSets(mesoId: $mesoId, date:$date) 
        {${parameters}}      
    }
  `;
  });
