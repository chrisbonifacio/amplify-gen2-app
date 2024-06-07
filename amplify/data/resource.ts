import {
  type ClientSchema,
  a,
  defineData,
  defineFunction,
} from "@aws-amplify/backend";

const addCognitoUser = defineFunction({
  entry: "./handler.ts",
});

const schema = a.schema({
  Todo: a
    .model({
      title: a.string().required(),
      goalId: a.id(),
      goal: a.belongsTo("Goal", "goalId"),
    })
    .authorization((allow) => [
      allow.owner(),
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
  Cart: a
    .model({
      items: a.string().required().array(),
      // 1. Create reference field
      customerId: a.id(),
      // 2. Create relationship field with the reference field
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Customer: a
    .model({
      name: a.string(),
      // 3. Create relationship field with the reference field
      //    from the Cart model
      activeCart: a.hasOne("Cart", "customerId"),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

// const exportSchema = schema.transform();

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "OripaData",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});
