"use client";

import { useState } from "react";
import { onSubmitForm } from "../actions";

const Form = () => {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitForm(name);
      }}
    >
      <input
        type="text"
        className="text-black"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
