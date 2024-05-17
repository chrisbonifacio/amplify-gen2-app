"use client";
import { useEffect, useState } from "react";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import {
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { getCurrentUser } from "aws-amplify/auth";

const client = generateClient<Schema>();

function Home({ signOut }: WithAuthenticatorProps) {
  const [phoneNumbers, setPhoneNumbers] = useState<any>();

  // const test = async () => {
  //   const currentUser = await getCurrentUser();

  //   const { data: recieveUnreadMessages } =
  //     await client.models.Message.listByReceiverIdAndViewedTimeStamp({
  //       receiverId: currentUser.userId,
  //       viewedTimeStamp: {
  //         attributeExists: false,
  //       },
  //     });

  //   const { data: sentUnreadMessages } =
  //     await client.models.Message.listBySenderIdAndViewedTimeStamp({
  //       senderId: currentUser.userId,
  //       viewedTimeStamp: {
  //         attributeExists: true,
  //       },
  //     });

  //   console.log({ recieveUnreadMessages, sentUnreadMessages });
  // };

  const createLocation = async () => {
    const { data, errors } =
      await client.mutations.createNewLocationWithLongLat({
        id: "12345",
        address: "2230 University Ave",
        name: "Home",
        lat: 40.859468005470646,
        long: -73.90785841528128,
      });
  };

  const listLocations = async () => {
    const { data, errors } = await client.queries.listEventsWithDecodedLatLong({
      authMode: "apiKey",
    });

    console.log(data);

    // if (data) setLocations(data);
  };

  const checkActivePhoneNumbers = async () => {
    const largeArray = new Array(95).fill("");

    const fakePhoneNumbers = largeArray.map((_, index) => `${index}`);

    const phoneNumbers = ["718-706-5432", "718-706-4327", ...fakePhoneNumbers];

    const { data, errors } =
      await client.queries.checkBatchOfPhoneNumbersForActiveUsers({
        phoneNumbers,
      });

    console.log(data);

    setPhoneNumbers(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={signOut}>Sign Out</button>
      {/* <button onClick={test}>Send Message</button> */}
      <button onClick={checkActivePhoneNumbers}>Check Phone Numbers</button>
      <button onClick={createLocation}>Create Location</button>
      <button onClick={listLocations}>List Locations</button>
      <div>
        <pre>{JSON.stringify(phoneNumbers, null, 2)}</pre>
      </div>
    </main>
  );
}

export default Home;
