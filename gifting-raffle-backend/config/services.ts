export const makeApiConfig = (env: any) => ({
  appName: "boilerplate_api",
  accessTokenKey: env.ACCESS_TOKEN_KEY,
  gmailAddress: env.GMAIL_ADDRESS,
  gmailPassword: env.GMAIL_PASSWORD,
  port: env.PORT || "1337",
});
