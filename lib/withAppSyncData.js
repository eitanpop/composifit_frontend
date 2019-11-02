import { withAppSyncData } from "next-apollo-appsync";
import { Auth } from "aws-amplify";
import appSyncConfig from "../aws-exports";

export default withAppSyncData({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    jwtToken: async () => {
      try {
        return (await Auth.currentSession()).getIdToken().getJwtToken();
      } catch (err) {
        console.log(err);
      }
    }
  },
  disableOffline: true
});
