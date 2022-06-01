import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Route, Routes } from "react-router-dom";

// function App() {
//   // const navigate = useNavigate();
//   function createPost() {
//     //Takes the currents users id and name

//     let title = "Bob";
//     let author = "Dug";
//     let number = 4;
//     let pages = 2;

//     const config = {
//       header: {
//         "Content-Type": "application/json",
//       },
//     };

//     try {
//       const { data } = axios.post(
//         "http://localhost:5000/",

//         { title, author, number, pages },

//         config
//       );

//       alert("Post!");

//       localStorage.setItem("authToken", data.token);
//     } catch (error) {
//       // console.log(error.response.data);

//       setTimeout(() => {}, 1000);
//     }
//   }

//   return (
//     <div className="app_container">
//       <h1 className="title">assignment 2</h1>
//       <p>here is some information</p>
//       <button onClick={createPost}> Press me</button>
//     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res.data.message);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
