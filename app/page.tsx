"use client";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";

const client = generateClient<Schema>({ authMode: "apiKey" });

export default function Home() {
  const addRacerToRace = async () => {
    const { data, errors } = await client.mutations.createRace({
      raceId: "1",
      classId: "1",
    });

    console.log(data);
  };

  const getRaceResultsByRacerId = async () => {
    const { data, errors } = await client.queries.getRaceResultsByRacerId({
      racerId: "1",
    });
  };

  const getRacesByClassID = async () => {
    const { data, errors } = await client.queries.getRacesByClassId({
      classId: "<classID>",
    });

    console.log(data);
  };

  const getBestPerformancebyClassID = async () => {
    const { data, errors } = await client.queries.getBestPerformanceByClassIc({
      classId: "<classID>",
    });

    console.log(data);
  };

  const getListOfTopScoresByRaceID = async () => {
    const { data, errors } =
      await client.models.RacingTable.listByGlobalSecondaryIndex(
        {
          sk: "<raceID>",
        },
        { sortDirection: "DESC" }
      );

    console.log(data);
  };

  const getSecondBySecondPerformanceByRacerForAllRaces = async () => {
    const { data, errors } = await client.models.RacingTable.list({
      pk: "<racerID>",
    });

    console.log(data);
  };

  // const listUsersBySearchTermFunction = async () => {
  //   try {
  //     const { data, errors } = await client.models.User.listUsersBySearchTerm({
  //       searchTerm: "ABCD",
  //       firstNameLastName: {
  //         eq: {
  //           firstName: "Chris",
  //           lastName: "Bonifacio",
  //         },
  //       },
  //     });

  //     if (errors) {
  //       console.log({ errors });
  //     }

  //     const res = await client.graphql({
  //       query: listUsersBySearchTerm,
  //       variables: {
  //         searchTerm: "ABCD",
  //         firstNameLastName: {
  //           eq: {
  //             firstName: "Chris",
  //             lastName: "Bonifacio",
  //           },
  //         },
  //       },
  //     });

  //     console.log(data);

  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button onClick={addRacerToRace}>Add Racer to Race</button>
        {/* <button onClick={listUsersBySearchTermFunction}>
          List Users By Search Term
        </button> */}
      </div>
    </main>
  );
}
