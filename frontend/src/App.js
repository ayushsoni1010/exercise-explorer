import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
// import EditExercise from "./components/EditExercise";
import ExercisesList from "./components/ExercisesList";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <CreateUser />
        <CreateExercise />
      </div>
      {/* <Routes>
        <Route path="/" element={<ExercisesList />}>
          <Route path="/user" element={<CreateUser/>} />
        </Route>
      </Routes> */}
    </BrowserRouter>

    /* <Route path="/"  component={ExercisesList} />
        <Route path="/create"  component={CreateExercise} />
        <Route path="/edit/:id"  component={EditExercise} /> */
  );
}

export default App;
