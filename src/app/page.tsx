import { listTodos } from "@/graphql/queries";
import { serverClient } from "../../utils/server-utils";
import Form from "./components/Form";

export default async function Home() {
  const res = await serverClient.graphql({
    query: listTodos,
    variables: {
      limit: 10,
    },
  });

  console.log(res.data.listTodos.items);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form />
      {res.data.listTodos.items.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </main>
  );
}
