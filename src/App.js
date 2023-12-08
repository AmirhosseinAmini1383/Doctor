import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import HealthStats from "./Page/MedicalPage/HealthStats";
import ColdExercise from "./Page/MedicalPage/ColdExercise";
import DoctorTest from "./Page/MedicalPage/DoctorTest";
import Cold from "./Page/MedicalPage/Cold";
import MedicalAll from "./Page/MedicalShowAll/MedicalAll";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HealthStats" element={<HealthStats />} />
          <Route path="/ColdExercise" element={<ColdExercise />} />
          <Route path="/DoctorTest" element={<DoctorTest />} />
          <Route path="/Cold" element={<Cold />} />
          <Route path="/medical" element={<MedicalAll />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
