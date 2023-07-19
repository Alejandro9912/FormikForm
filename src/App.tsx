import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FormikFormExample from "./FormikForm";
import Step5 from "./Step5";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta principal, redirige al primer paso */}
        <Route path="/" element={<Navigate to="/step/1" />} />

        {/* Ruta para los diferentes pasos del formulario */}
        <Route path="/step/:stepNumber" element={<FormikFormExample />} />

        {/* Ruta para mostrar el resumen de datos (paso 5) */}
        <Route path="/step/5" element={<Step5 />} />
      </Routes>
    </Router>
  );
};

export default App;
