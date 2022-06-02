import React from "react";
import {Route, NavLink, BrowserRouter as Router, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import SubmitArticle from "./pages/Submit-Article"; 
import ModerationArticle from "./pages/Moderation-Attical"; 

import FindArticle from "./pages/Find-Artical"; 
import NotFoundPage from "./pages/404";

const App = () =>  {
  return (
      <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
          <ul className="header">
              <li><NavLink exact to = "/">Home</NavLink></li>
             
              <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
              <li><NavLink to = "/FindArticle">Find an Article</NavLink></li>
              <li><NavLink to = "/ModerationArticle">Moderation an Article</NavLink></li>
            
          </ul>
          
         
        <div className="content">
          <Route exact path="/" component={Home}/>
        
          <Route  path="/SubmitArticle" component={SubmitArticle}/>
          <Route  path="/FindArticle" component={FindArticle}/>
          <Route  path="/ModerationArticle" component={ModerationArticle}/>
     
          
          <Route exact path="/404" component={NotFoundPage}/>
          <Redirect to="/404" />
        </div>
      </div>
      </Router>
  );
}

export default App;

