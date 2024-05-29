import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  RacingTable: a
    .model({
      pk: a.string().required(),
      sk: a.string().required(),
      numeric: a.float(),
      results: a.json(),
    })
    // Main composite key: PK and SK
    .identifier(["pk", "sk"])

    .secondaryIndexes((index) => [
      // LSI: Partition key: pk, Sort key: numeric
      index("pk").sortKeys(["numeric"]).queryField("listByLocalSecondaryIndex"),

      // GSI: Partition key: sk, Sort key: numeric
      index("sk")
        .sortKeys(["numeric"])
        .queryField("listByGlobalSecondaryIndex"),
    ])
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "MyLibrary",
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
