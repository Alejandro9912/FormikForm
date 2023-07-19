import React from "react";

// Interfaz para definir las propiedades que se pueden pasar al componente FormSteps
interface FormStepProps {
  step: number; // Número del paso actual
  currentStep: number; // Número del paso activo
  children: React.ReactNode; // Contenido del paso
}

// Componente funcional FormSteps que muestra el contenido del paso si es el paso activo
const FormSteps: React.FC<FormStepProps> = ({
  step,
  currentStep,
  children,
}) => {
  // Determina si el paso actual es el paso activo
  const isStepActive = step === currentStep;

  return (
    // Renderiza un div con la clase "form-step" y agrega la clase "active" si es el paso activo
    <div className={`form-step ${isStepActive ? "active" : ""}`}>
      {children}
    </div>
  );
};

export default FormSteps;
