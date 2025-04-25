import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Silsilah from "./components/silsilah/Silsilah.js";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // import untuk animasi
import "./App.css";

function App() {
  return (
    <TransitionGroup>
      <Routes>
        <Route
          path="/home"
          element={
            <CSSTransition
              timeout={500} // durasi animasi dalam ms
              classNames="fade" // class untuk animasi
            >
              <Home />
            </CSSTransition>
          }
        />
        <Route
          path="/silsilah"
          element={
            <CSSTransition timeout={500} classNames="fade">
              <Silsilah />
            </CSSTransition>
          }
        />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </TransitionGroup>
  );
}

export default App;
