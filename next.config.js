const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment varibales for local development
        env: {
          IDP_DOMAIN: "emporiolambda.auth.eu-west-1.amazoncognito.com",
          USER_POOL_ID: "eu-west-1_g3tY2ay6y",
          USER_POOL_CLIENT_ID: "2p5i1sksdg7res1s6hrdo5ckk8",
          REDIRECT_SIGN_IN: "http://localhost:3000/token",
          REDIRECT_SIGN_OUT: "http://localhost:3000/",
          AUTH_COOKIE_DOMAIN: "localhost",
        },
      };
    default:
      return {
        // environment varibales for production
        env: {
          IDP_DOMAIN: "nextjs-example-prod.auth.eu-central-1.amazoncognito.com",
          USER_POOL_ID: "eu-central-1_p25eoCGW4",
          USER_POOL_CLIENT_ID: "66hpug32jqnemqg59bha64pvds",
          REDIRECT_SIGN_IN: "https://aws-cognito-next-example-app.now.sh/token",
          REDIRECT_SIGN_OUT: "https://aws-cognito-next-example-app.now.sh/",
          AUTH_COOKIE_DOMAIN: "aws-cognito-next-example-app.now.sh",
        },
      };
  }

};