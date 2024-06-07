import { defineAuth } from "@aws-amplify/backend-auth";

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: "Welcome 👋 verify your email!",
    },
  },
});
