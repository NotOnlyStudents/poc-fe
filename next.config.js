const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment varibales for local development
        env: {
          IDP_DOMAIN: "https://empriolambda.auth.eu-west-1.amazoncognito.com",
          STRIPE_PUBLIC_KEY: "pk_test_51IHqhuEKthtArr3S4MYSAYFEPiFlioccyA4SjUNArmmdSmK7B05UnMdsNKIu0TCRXADZLVmjEUlqKRIR4D2SWtJ700PVmechEl",
          USER_POOL_ID: "eu-west-1_GNvsrGORS",
          USER_POOL_CLIENT_ID: "51v3gjhdbtq2mt0m1fb1asniae",
          REDIRECT_SIGN_IN: "http://localhost:8080/",
          REDIRECT_SIGN_OUT: "http://localhost:8080/",
          API_BASE_URL: "http://localhost:3000",
          AUTH_COOKIE_DOMAIN: "localhost"
        },
      };
    default:
      return {
        // environment varibales for production
        env: {
          IDP_DOMAIN: "https://empriolambda.auth.eu-west-1.amazoncognito.com",
          USER_POOL_ID: "eu-west-1_GNvsrGORS",
          USER_POOL_CLIENT_ID: "51v3gjhdbtq2mt0m1fb1asniae",
          REDIRECT_SIGN_IN: "https://shop.annoiato.net/" 
          REDIRECT_SIGN_OUT: "https://shop.annoiato.net/"
          API_BASE_URL: "https://api.annoiato.net/"
          AUTH_COOKIE_DOMAIN: "aws-cognito-next-example-app.now.sh"
        },
      };
  }

};
