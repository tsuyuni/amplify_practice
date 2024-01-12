"use server";

import { createTodo } from "@/graphql/mutations";
import { serverClient } from "../../utils/server-utils";

const onSubmitForm = async (name: string) => {
  console.log("submit");
  try {
    await serverClient.graphql({
      query: createTodo,
      variables: {
        input: {
          name,
          description: "テスト用のtodo",
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export { onSubmitForm };
