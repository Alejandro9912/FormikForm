import React from "react";
import { useLocation } from "react-router-dom";

const Step5: React.FC = () => {
  const location = useLocation();
  const formData = location.state; // Obtenemos los datos pasados por React Router

  // Mostrar la página con los datos ingresados correctamente
  return (
    <div className="container">
      <h1>Datos Ingresados Correctamente</h1>
      <p className="firstName">Nombre: {formData.firstName}</p> 
      {/* Mostrar el nombre */}
      <p className="lastName">Apellido: {formData.lastName}</p> 
      {/* Mostrar el apellido */}
      <p className="dateOfBirth">
        Fecha de Nacimiento: {formData.dateOfBirth}
      </p> 
      {/* Mostrar la fecha de nacimiento */}
      <p>Correo Electrónico: {formData.email}</p> 
      {/* Mostrar el correo electrónico */}
      <p>Número de Teléfono: {formData.phoneNumber}</p> 
      {/* Mostrar el número de teléfono */}
      <p>Programa de Estudios: {formData.programOfStudy}</p> 
      {/* Mostrar el programa de estudios */}
      <p>Nivel de Estudios: {formData.educationLevel}</p> 
      {/* Mostrar el nivel de estudios */}
      <p>Calle: {formData.street}</p> {/* Mostrar la calle */}
      <p>Ciudad: {formData.city}</p> {/* Mostrar la ciudad */}
      <p>Código Postal: {formData.zipCode}</p> {/* Mostrar el código postal */}
    </div>
  );
};

export default Step5;
