import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Layout from "./components/Layout";
//import Practice from "./components/practice";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
