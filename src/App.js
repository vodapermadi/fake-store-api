import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Category from "./component/categories/Category";
import Home from "./component/home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category/${category}" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
