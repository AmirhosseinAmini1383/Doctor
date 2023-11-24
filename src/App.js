import React from "react";
import Content from "./Content/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ColdExercise from "./MedicalAdvicePage/ColdExercise";
import HealthStats from "./MedicalAdvicePage/HealthStats";
import DoctorTest from "./MedicalAdvicePage/DoctorTest";
import Cold from "./MedicalAdvicePage/Cold";
import MedicalAll from "./MedicalAdvicePage/MedicalAll";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
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
