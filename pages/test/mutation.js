import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import withAppSyncData from "../../lib/withAppSyncData";

const query = gql`
  mutation CreateMeso($name: String!, $beginDate: String!, $endDate: String!) {
    createMeso(name: $name, beginDate: $beginDate, endDate: $endDate)
  }
`;
const Test = () => {
  return (
    <Mutation mutation={query}>
      {(createMeso, { data }) => {
          console.log(data)
        return (
          <React.Fragment>
            <button
              onClick={() =>
                createMeso({
                  variables: {
                    name: "testFromParam",
                    beginDate: "01/01/2019",
                    endDate: "02/02/2022"
                  }
                })
              }
            >
              Click Me To create a meso
            </button>
            <span>{data ? `${data.createMeso} to show` : "No data to show"}</span>
          </React.Fragment>
        );
      }}
    </Mutation>
  );
};

export default withAppSyncData(Test);
