import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { EmployeeDataTable } from "./Pages/EmployeeDataTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeDataTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
