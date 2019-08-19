import { withAppSyncData } from "next-apollo-appsync";
import appSyncConfig from "./aws-config";

export default withAppSyncData({
  url: appSyncConfig.graphqlEndpoint,
  region: appSyncConfig.region,
  auth: {
    type: appSyncConfig.authenticationType,
    apiKey: appSyncConfig.apiKey
  },
  disableOffline: true
});
