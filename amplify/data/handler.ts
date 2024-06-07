import { Schema } from "./resource";

// type AddCognitoUser = Schema["addCognitoUser"]["returnType"]

export function handler(event: any, context: any, callback: any) {
  console.log(event);
  console.log(context);
  console.log(callback);

  return {
    user: {},
  };
}
