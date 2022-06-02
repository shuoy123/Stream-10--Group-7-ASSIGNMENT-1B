
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ModerationForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <p>Title Author Journal Year of publication volume pages  DOI </p>
  
   

  <input type="submit" value="rejected"/>
  <input type="submit" value="not rejected"/>

  
    </form>
  );
}
export default ModerationForm;

