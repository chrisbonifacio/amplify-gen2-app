"use client";

import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import amplify_outputs from "@/amplify_outputs.json";

Amplify.configure(amplify_outputs);

const client = generateClient<Schema>();

type Todo = Schema["Todo"]["type"];

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const updateTodo = async () => {
    const { goal, createdAt, updatedAt, ...todoWithoutExtraFields } = todos[0];
    todoWithoutExtraFields.title = "updated todo";

    const { data, errors } = await client.models.Todo.update(
      todoWithoutExtraFields
    );

    if (errors) {
      console.error(errors);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe(
      async ({ isSynced, items }) => {
        if (isSynced) {
          console.log(items);
          setTodos(items);
        }
      }
    );

    return () => {
      sub.unsubscribe();
    };
  }, []);

  async function createTodo() {
    const { data: todo, errors } = await client.models.Todo.create({
      title: "my todo",
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={createTodo}>create todo</button>
      <button onClick={updateTodo}>update todo</button>
    </main>
  );
}
