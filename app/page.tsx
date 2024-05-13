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

    const response = await client.models.Friendship.listFriendshipsByReceiverId(
      {
        receiverId: currentUser.userId,
      }
    );

    // should return a friendship object

    const firstFriendshipReceiver = await response.data[0].receiver();
    console.log(firstFriendshipReceiver); // logs: [Function anonymous]

    // const firstFriendshipReceiver = response.data[0].receiver() // added function parenthesis
    // console.log(firstFriendshipReceiver) // logs {"_A": null, "_x": 0, "_y": 3, "_z": {"_A": null, "_x": 0, "_y": 0, "_z": null}}
  };

  const publishToEventBridge = async () => {
    await client.mutations.publishOrderToEventBridge({
      orderId: "123",
      status: "SHIPPED",
      message: "Order has been shipped",
    });
  };

  useEffect(() => {
    const sub = client.subscriptions.onOrderFromEventBridge().subscribe({
      next: (data) => {
        console.log(data);
      },
    });

    return () => sub.unsubscribe();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={signOut}>Sign Out</button>
      <button onClick={publishToEventBridge}>Publish to EventBridge</button>
    </main>
  );
}

export default withAuthenticator(Home);
