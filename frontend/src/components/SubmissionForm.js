import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      Title:<input {...register("title")} placeholder="Title" />
      <p>Author<input {...register("authors")} placeholder="Authors" /></p>
      <p>Journal<input {...register("journal")} placeholder="Journal" /></p>
      <p>Year of publication <input {...register("pubyear")} placeholder="Year of publication" /></p>
      <p>volume<input {...register("volume")} placeholder="volume" /></p>
      <p>number<input {...register("number")} placeholder="number" /></p>
      <p>pages<input {...register("pages")} placeholder="pages" /></p>
      <p>DOI<input {...register("doi")} placeholder="DOI" /></p>
     
 
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;
