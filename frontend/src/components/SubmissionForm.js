import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => {
    //setResult(JSON.stringify(data));
    Axios.post("http://localhost:5001/api/articles", {
      title: data.title,
      author: data.authors,
      journalname: data.journal,
      published: data.pubyear,
      volume: data.volume,
      number: data.number,
      doi: data.doi,
      practice: data.practice,
      claim: data.claim,
      evidence: data.evidence,
    }).then((response) => {
      alert("Article Submitted");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Title:
      <input {...register("title")} placeholder="Title" />
      <p>
        Author
        <input {...register("authors")} placeholder="Authors" />
      </p>
      <p>
        Journal
        <input {...register("journal")} placeholder="Journal" />
      </p>
      <p>
        Year of publication{" "}
        <input {...register("pubyear")} placeholder="Year of publication" />
      </p>
      <p>
        volume
        <input {...register("volume")} placeholder="volume" />
      </p>
      <p>
        number
        <input {...register("number")} placeholder="number" />
      </p>
      <p>
        pages
        <input {...register("pages")} placeholder="pages" />
      </p>
      <p>
        DOI
        <input {...register("doi")} placeholder="DOI" />
      </p>
      <p>
        practice
        <input {...register("practice")} placeholder="practice" />
      </p>
      <p>
        claim
        <input {...register("claim")} placeholder="claim" />
      </p>
      <p>
        evidence
        <input {...register("evidence")} placeholder="evidence" />
      </p>
      <input type="submit" />
    </form>
  );
};
export default SubmissionForm;
