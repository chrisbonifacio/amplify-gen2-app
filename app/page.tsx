"use client";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import {
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";
import { getCurrentUser } from "aws-amplify/auth";

const client = generateClient<Schema>();

function Home({ signOut }: WithAuthenticatorProps) {
  const test = async () => {
    const currentUser = await getCurrentUser();

    const { data: recieveUnreadMessages } =
      await client.models.Message.listByReceiverIdAndViewedTimeStamp({
        receiverId: currentUser.userId,
        viewedTimeStamp: {
          attributeExists: false,
        },
      });

    const { data: sentUnreadMessages } =
      await client.models.Message.listBySenderIdAndViewedTimeStamp({
        senderId: currentUser.userId,
        viewedTimeStamp: {
          attributeExists: true,
        },
      });

    console.log({ recieveUnreadMessages, sentUnreadMessages });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={signOut}>Sign Out</button>
      <button onClick={test}>Send Message</button>
    </main>
  );
}

export default withAuthenticator(Home);
