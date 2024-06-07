"use client";
import { type Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";

const client = generateClient<Schema>();

type Todo = Schema["Todo"]["type"];

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = async () => {
    await client.models.Todo.create({
      title: "New Todo",
    });
  };

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: async ({ isSynced, items }) => {
        if (isSynced) setTodos(items);
      },
    });

    return sub.unsubscribe();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button onClick={createTodo}>Create Todo</button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </main>
  );
}
