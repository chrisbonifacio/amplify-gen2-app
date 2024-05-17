"use client";
import { useEffect, useState } from "react";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const client = generateClient<Schema>();

function Home({ signOut }: WithAuthenticatorProps) {
  const [phoneNumbers, setPhoneNumbers] = useState<any>();

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

      <div>
        <pre>{JSON.stringify(phoneNumbers, null, 2)}</pre>
      </div>
    </main>
  );
}

export default Home;
