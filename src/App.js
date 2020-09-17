import React from "react";
import "./styles.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";
export default function App() {
  return (
    <>
      <Navbar />
      <TourList />
    </>
  );
}
