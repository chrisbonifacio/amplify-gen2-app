import { a, ClientSchema, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string().required(),
      done: a.boolean().default(false),
      userId: a.id().required(),
      user: a.belongsTo("User", "userId"),
    })
    .authorization((allow) => [allow.guest()]),
  Group: a.enum(["ADMIN", "CUSTOMER"]),
  User: a
    .model({
      username: a.string().required(),
      group: a.ref("Group").required(),
      todos: a.hasMany("Todo", "userId"),
    })
    .authorization((allow) => [allow.guest()]),
  Installer: a
    .model({
      id: a.id(),
      firstName: a.string(),
      lastName: a.string(),
      jobCredit: a.integer().default(5000),
    })
    .authorization((allow) => [allow.guest(), allow.authenticated()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
