"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";

import type { Schema } from "../amplify/data/resource";

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);

const amplifyClient: import("aws-amplify/data").Client<
  import("../amplify/data/resource").Schema
> = generateClient<Schema>({
  authMode: "userPool",
});

const App = () => {
  const test = async () => {
    amplifyClient.models.Installer.update({
      id: "123",
      jobCredit: 2,
    });
  };

  return (
    <Authenticator>
      {({ user, signOut }) => {
        return (
          <>
            <h1>Hello {user?.username}</h1>
            <h1>Protected content!</h1>
          </>
        );
      }}
    </Authenticator>
  );
};

export default App;
