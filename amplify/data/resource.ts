import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      title: a.string().required(),
      goalId: a.id(),
      goal: a.belongsTo("Goal", "goalId"),
    })
    .authorization((allow) => [
      allow.publicApiKey(),
      // allow.owner(),
      allow.group("Users").to(["read"]),
      allow.group("Administrators"),
    ]),
  Goal: a
    .model({
      title: a.string().required(),
      todos: a.hasMany("Todo", "goalId"),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.group("Users").to(["read"]),
      allow.group("Administrators"),
    ]),
  Message: a
    .model({
      userId: a.id().required(),
      chatId: a.id().required(),
      chat: a.belongsTo("Chat", "chatId"),
      content: a.string(),
      time: a.timestamp(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  Chat: a
    .model({
      ownerId: a.id().required(),
      chatName: a.string().required(),
      messages: a.hasMany("Message", "chatId"),
      time: a.timestamp(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
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
