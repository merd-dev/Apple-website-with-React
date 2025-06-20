import "./css/styles.css";
import "./css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;
