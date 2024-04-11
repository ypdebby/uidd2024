import { React } from "react";
import "./App.css";
import About from "@/pages/About";
import {Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <h1>Home page</h1>
        </>
      } />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}
