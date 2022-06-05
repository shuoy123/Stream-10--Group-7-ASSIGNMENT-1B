import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import articles from "../dummydata/articles";

//import FindForm from "../components/FindForm.js";
const FindArticle = () => {
  const [listOfArticles, setListOfArticles] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5001/api/articles").then((response) => {
      setListOfArticles(response.data);
    });
  }, []);
  return (
    <div>
      <h2>Find Article:</h2>
      <br />

      <div style={{ backgroundColor: "lightgray" }}>
        {listOfArticles.map((article) => {
          return (
            <div>
              <h3>Title: {article.title}</h3>
              <h3>Author: {article.author}</h3>
              <h3>Journal: {article.journalname}</h3>
              <h3>Published on: {article.published}</h3>
              <h3>Volume: {article.volume}</h3>
              <h3>Number: {article.number}</h3>
              <h3>DOI: {article.doi}</h3>
              <h3>Practice: {article.practice}</h3>
              <h3>Claim: {article.claim}</h3>
              <h3>Evidence: {article.evidence}</h3>

              <div style={{ backgroundColor: "white" }}>
                <br />
                <br />
              </div>
            </div>
          );
        })}
      </div>

      {/* <FindForm/> */}
    </div>
  );
};

export default FindArticle;
