import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import withAppSyncData from "../../lib/withAppSyncData";

const query = gql`
  query getValues {
    getValues
  }
`;
const Test = () => {
  return <Query query={query}>
    {({ data, loading }) => {
      return !!loading ? <div>Loading</div> : <div>{data.getValues}</div>;
    }}
  </Query>;
};

export default withAppSyncData(Test);
