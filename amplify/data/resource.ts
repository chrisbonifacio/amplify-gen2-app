import {
  a,
  ClientSchema,
  defineData,
  defineFunction,
} from "@aws-amplify/backend";

import { UserGroup } from "./types";

const adminActions = defineFunction({
  entry: "../functions/adminActions.ts",
});

const schema = a.schema({
  Avatar: a
    .model({
      face: a.url(),
      full: a.url().required(),
      studentId: a.string(),
      student: a.belongsTo("Student", "studentId"),
    })
    .authorization((allow) => [
      allow.group(UserGroup.SUPERADMIN),
      allow.authenticated().to(["read"]),
    ]),
  Subject: a
    .model({
      id: a.string().required(),
      name: a.string().required(),
      icon: a.url(),
      questionId: a.string(),
      question: a.belongsTo("Question", "questionId"),
    })
    .authorization((allow) => [
      allow.group(UserGroup.SUPERADMIN),
      allow.authenticated().to(["read"]),
    ]),
  Grade: a
    .model({
      id: a.string().required(),
      name: a.string().required(),
      studentId: a.string(),
      student: a.belongsTo("Student", "studentId"),
      questionId: a.string(),
      question: a.belongsTo("Question", "questionId"),
    })
    .authorization((allow) => [
      allow.group(UserGroup.SUPERADMIN),
      allow.authenticated().to(["read"]),
    ]),
  Language: a
    .model({
      id: a.string().required(),
      name: a.string().required(),
      tagLine: a.string().required(),
      flag: a.url().required(),
      questionLanguageId: a.string(),
      questionLanguage: a.belongsTo("QuestionLanguage", "questionLanguageId"),
      studentId: a.string(),
      student: a.belongsTo("Student", "studentId"),
      quizQuestionId: a.string(),
      quizQuestion: a.belongsTo("QuizQuestion", "quizQuestionId"),
    })
    .authorization((allow) => [
      allow.group(UserGroup.SUPERADMIN),
      allow.authenticated().to(["read"]),
    ]),
  ComplexityType: a.enum(["EASY", "MODERATE", "DIFFICULT", "ALGORITHM"]),
  Question: a
    .model({
      id: a.string().required(),
      excerpt: a.string().required(),
      complexity: a.ref("ComplexityType").required(),
      topic: a.string().required(),
      // relationships
      grade: a.hasOne("Grade", "questionId"),
      subject: a.hasOne("Subject", "questionId"),
      languages: a.hasMany("QuestionLanguage", "questionId"),
      quizQuestions: a.hasMany("QuizQuestion", "questionId"),
    })
    .authorization((allow) => [
      allow.group(UserGroup.SUPERADMIN),
      allow.authenticated().to(["read"]),
    ]),
  QuestionLanguage: a
    .model({
      id: a.string().required(),
      content: a.string().required(),
      imageContent: a.url(),
      correctOptionValue: a
        .string()
        .authorization((allow) => [
          allow.group(UserGroup.SUPERADMIN),
          allow.groups([UserGroup.ADMIN, UserGroup.TEACHER]).to(["read"]),
        ]),
      optionValues: a.string().array(),
      // relationships
      questionId: a.string(),
      question: a.belongsTo("Question", "questionId"),
      language: a.hasOne("Language", "questionLanguageId"),
    })
    .authorization((allow) => [
      allow.group(UserGroup.SUPERADMIN),
      allow.authenticated().to(["read"]),
    ]),
  Institution: a
    .model({
      id: a.string().required(),
      name: a.string().required(),
      teachers: a.hasMany("Teacher", "institutionId"),
      students: a.hasMany("Student", "institutionId"),
      quizzes: a.hasMany("Quiz", "institutionId"),
      stats: a.hasMany("Stats", "institutionId"),
    })
    .authorization((allow) => [
      allow.group(UserGroup.SUPERADMIN),
      allow.authenticated().to(["read"]),
      allow.owner().to(["read"]),
    ]),
  Student: a
    .model({
      firstName: a.string(),
      lastName: a.string(),
      userName: a.string(),
      bio: a.string(),
      onBoarded: a.boolean().default(false),
      // relationships
      institutionId: a.string(),
      institution: a
        .belongsTo("Institution", "institutionId")
        .authorization((allow) => [
          allow.group(UserGroup.SUPERADMIN),
          allow.groups([UserGroup.ADMIN, UserGroup.TEACHER]).to(["create"]),
          allow.authenticated().to(["read"]),
        ]),
      grade: a
        .hasOne("Grade", "studentId")
        .authorization((allow) => [
          allow.groups([UserGroup.SUPERADMIN, UserGroup.ADMIN]),
          allow.group(UserGroup.TEACHER).to(["read", "create", "update"]),
          allow.authenticated().to(["read"]),
        ]),
      avatar: a.hasOne("Avatar", "studentId"),
      primaryLanguage: a.hasOne("Language", "studentId"),
      secondaryLanguage: a.hasOne("Language", "studentId"),
    })
    .authorization((allow) => [
      allow.groups([UserGroup.SUPERADMIN, UserGroup.ADMIN]),
      allow.group(UserGroup.TEACHER).to(["create", "update"]),
      allow.owner().to(["update"]),
      allow.authenticated().to(["read"]),
    ]),
  Teacher: a
    .model({
      firstName: a.string(),
      lastName: a.string(),
      // relationships
      institutionId: a.string(),
      institution: a
        .belongsTo("Institution", "institutionId")
        .authorization((allow) => [
          allow.group(UserGroup.SUPERADMIN),
          allow.groups([UserGroup.ADMIN, UserGroup.TEACHER]).to(["create"]),
          allow.authenticated().to(["read"]),
        ]),
    })
    .authorization((allow) => [
      allow.groups([UserGroup.SUPERADMIN, UserGroup.ADMIN]),
      allow.owner().to(["update"]),
      allow.authenticated().to(["read"]),
    ]),
  Stats: a
    .model({
      key: a.string().required(),
      value: a.integer().required(),
      time: a.datetime().required(),
      // relationships
      institutionId: a.string(),
      institution: a
        .belongsTo("Institution", "institutionId")
        .authorization((allow) => [
          allow.group(UserGroup.SUPERADMIN),
          allow.groups([UserGroup.ADMIN, UserGroup.TEACHER]).to(["create"]),
          allow.authenticated().to(["read"]),
        ]),
    })
    .authorization((allow) => [
      allow.group(UserGroup.SUPERADMIN),
      allow.authenticated().to(["create", "update", "read"]),
    ])
    .identifier(["key", "time"]),
  QuizStatusType: a.enum(["DRAFT", "PUBLISHED", "CLOSED"]),
  Quiz: a
    .model({
      id: a.id().required(),
      title: a.string().required(),
      thumbnail: a.url(),
      noOfQuestions: a.integer().default(0).required(),
      students: a.string().array(),
      grades: a.string().array(),
      subjects: a.string().array(),
      status: a.ref("QuizStatusType"),
      // relationships
      institutionId: a.string(),
      institution: a
        .belongsTo("Institution", "institutionId")
        .authorization((allow) => [
          allow.group(UserGroup.SUPERADMIN),
          allow.groups([UserGroup.ADMIN, UserGroup.TEACHER]).to(["create"]),
          allow.authenticated().to(["read"]),
        ]),
      questions: a.hasMany("QuizQuestion", "quizId"),
    })
    .authorization((allow) => [
      allow.groups([UserGroup.SUPERADMIN, UserGroup.ADMIN]),
      allow.owner().to(["create", "update"]),
      allow.authenticated().to(["read"]),
    ]),
  QuizQuestion: a
    .model({
      quizId: a.string(),
      quiz: a.belongsTo("Quiz", "quizId"),
      questionId: a.string(),
      question: a.belongsTo("Question", "questionId"),
      defaultLanguage: a.hasOne("Language", "quizQuestionId"),
    })
    .authorization((allow) => [
      allow.group(UserGroup.SUPERADMIN),
      allow
        .groups([UserGroup.TEACHER, UserGroup.ADMIN])
        .to(["create", "read", "delete"]),
      allow.groups([UserGroup.STUDENT]).to(["read"]),
    ]),
  CreateUserResponse: a.customType({
    id: a
      .string()
      .required()
      .authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),
  }),
  ApiBaseResponse: a.customType({
    success: a
      .boolean()
      .authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),
    error: a
      .string()
      .authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),
  }),
  createInstitutionGroups: a
    .mutation()
    .arguments({ institution: a.string().required() })
    .returns(a.ref("ApiBaseResponse"))
    .handler(a.handler.function(adminActions))

    .authorization((allow) => [allow.group(UserGroup.SUPERADMIN)]),
  createUser: a
    .mutation()
    .arguments({
      email: a.string().required(),
      password: a.string().required(),
      group: a.string().required(),
      institution: a.string(),
    })
    .returns(a.ref("CreateUserResponse"))
    .handler(a.handler.function(adminActions))

    .authorization((allow) => [
      allow.groups([UserGroup.SUPERADMIN, UserGroup.ADMIN, UserGroup.TEACHER]),
    ]),
  uploadQuestions: a
    .mutation()
    .arguments({ url: a.string().required() })
    .returns(a.ref("ApiBaseResponse"))
    .handler(a.handler.function(adminActions))
    .authorization((allow) => [allow.group(UserGroup.SUPERADMIN)]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for allow.publicApiKey() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
  functions: {
    adminActions,
  },
});
