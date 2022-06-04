import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FindForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Input the keyword to find the artical</p>
      <p>
        Title: <input {...register("title")} placeholder="Title" />
      </p>
      <p>
        Author: <input {...register("authors")} placeholder="Authors" />
      </p>
      <p>
        Journal: <input {...register("journal")} placeholder="Journal" />
      </p>

      <input type="submit" value="Find" />
    </form>
  );
};
export default FindForm;
