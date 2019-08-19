import Client from "aws-appsync";
import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react"
import { createHttpLink } from 'apollo-link-http';
import fetch from 'unfetch';
import AppSyncConfig from "../lib/aws-config";

const client = new Client({
  url: AppSyncConfig.graphqlEndpoint,
  region: AppSyncConfig.region,
  auth: { type: "API_KEY", apiKey: AppSyncConfig.apiKey },
  link: createHttpLink({
    uri: AppSyncConfig.graphqlEndpoint,
    fetch: fetch,
  })
});

export default ({ Component }) => (
  <ApolloProvider client={client}>
    <Rehydrated>{Component}</Rehydrated>
  </ApolloProvider>
);
