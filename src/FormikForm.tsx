import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import FormSteps from "./FormSteps";
import "./scss/style.scss";

const initialValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  email: "",
  phoneNumber: "",
  programOfStudy: "",
  educationLevel: "",
  street: "",
  city: "",
  zipCode: "",
};

const validationSchema = Yup.object({
  // Especificamos las validaciones para cada campo
  firstName: Yup.string().required("Campo obligatorio"),
  lastName: Yup.string().required("Campo obligatorio"),
  dateOfBirth: Yup.string().required("Campo obligatorio"),
  email: Yup.string().email("Correo inválido").required("Campo obligatorio"),
  phoneNumber: Yup.string().required("Campo obligatorio"),
  programOfStudy: Yup.string().required("Campo obligatorio"),
  educationLevel: Yup.string().required("Campo obligatorio"),
  street: Yup.string().required("Campo obligatorio"),
  city: Yup.string().required("Campo obligatorio"),
  zipCode: Yup.string().required("Campo obligatorio"),
});

const FormikFormExample: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNextStep = () => {
    // Actualizamos el estado para avanzar al siguiente paso
    setCurrentStep((prevStep) => prevStep + 1);
    // Redirigimos a la ruta correspondiente al siguiente paso
    navigate(`/step/${currentStep + 1}`);
  };

  const handlePrevStep = () => {
    // Actualizamos el estado para retroceder al paso anterior
    setCurrentStep((prevStep) => prevStep - 1);
    // Redirigimos a la ruta correspondiente al paso anterior
    navigate(`/step/${currentStep - 1}`);
  };

  useEffect(() => {
    // Extraemos el número del paso actual de la URL
    const step = Number(location.pathname.split("/").pop());
    // Si el número del paso es válido y no coincide con el estado actual, lo actualizamos
    if (!isNaN(step) && step !== currentStep) {
      setCurrentStep(step);
    }
  }, [location.pathname, currentStep]);

  // Función para manejar la confirmación y el envío de datos
  const handleConfirmation = (values: any) => {
    setIsConfirmed(true);
    // Redirigimos al usuario a la nueva ruta "step/5" y pasamos los datos ingresados como propiedades
    navigate("/step/5", { state: values });
  };

  return (
    <div className="container">
      <h1>Formulario de Inscripción a la Universidad</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 1000);
        }}
        enableReinitialize={true}
      >
        {({ values, isSubmitting }) => (
          <Form>
            {/* Contenedor general para el paso y los botones */}
            <div className="step-container">
              {/* Renderizamos solo el componente FormSteps cuando el paso coincide con el paso actual y la URL */}
              {currentStep === 1 && location.pathname.endsWith("/step/1") && (
                <FormSteps step={1} currentStep={currentStep}>
                  <div>
                    <h2>Paso 1: Datos Personales</h2>
                    <div>
                      <label htmlFor="firstName">Nombre:</label>
                      <Field type="text" id="firstName" name="firstName" />
                      <ErrorMessage name="firstName" component="div" />
                    </div>
                    <div>
                      <label htmlFor="lastName">Apellido:</label>
                      <Field type="text" id="lastName" name="lastName" />
                      <ErrorMessage name="lastName" component="div" />
                    </div>
                    <div>
                      <label htmlFor="dateOfBirth">Fecha de nacimiento:</label>
                      <Field type="date" id="dateOfBirth" name="dateOfBirth" />
                      <ErrorMessage name="dateOfBirth" component="div" />
                    </div>
                  </div>
                </FormSteps>
              )}
              {currentStep === 2 && location.pathname.endsWith("/step/2") && (
                <FormSteps step={2} currentStep={currentStep}>
                  <div>
                    <h2>Paso 2: Información de Contacto</h2>
                    <div>
                      <label htmlFor="email">Correo electrónico:</label>
                      <Field type="text" id="email" name="email" />
                      <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber">Teléfono:</label>
                      <Field type="text" id="phoneNumber" name="phoneNumber" />
                      <ErrorMessage name="phoneNumber" component="div" />
                    </div>
                  </div>
                </FormSteps>
              )}
              {currentStep === 3 && location.pathname.endsWith("/step/3") && (
                <FormSteps step={3} currentStep={currentStep}>
                  <div>
                    <h2>Paso 3: Información Académica</h2>
                    <div>
                      <label htmlFor="programOfStudy">
                        Programa de estudios:
                      </label>
                      <Field
                        type="text"
                        id="programOfStudy"
                        name="programOfStudy"
                      />
                      <ErrorMessage name="programOfStudy" component="div" />
                    </div>
                    <div>
                      <label htmlFor="educationLevel">Nivel de estudios:</label>
                      <Field
                        as="select"
                        id="educationLevel"
                        name="educationLevel"
                      >
                        <option value="">
                          Seleccione un nivel de estudios
                        </option>
                        <option value="Pregrado">Pregrado</option>
                        <option value="Posgrado">Posgrado</option>
                      </Field>
                      <ErrorMessage name="educationLevel" component="div" />
                    </div>
                  </div>
                </FormSteps>
              )}
              {currentStep === 4 && location.pathname.endsWith("/step/4") && (
                <FormSteps step={4} currentStep={currentStep}>
                  <div>
                    <h2>Paso 4: Dirección</h2>
                    <div>
                      <label htmlFor="street">Calle:</label>
                      <Field type="text" id="street" name="street" />
                      <ErrorMessage name="street" component="div" />
                    </div>
                    <div>
                      <label htmlFor="city">Ciudad:</label>
                      <Field type="text" id="city" name="city" />
                      <ErrorMessage name="city" component="div" />
                    </div>
                    <div>
                      <label htmlFor="zipCode">Código Postal:</label>
                      <Field type="text" id="zipCode" name="zipCode" />
                      <ErrorMessage name="zipCode" component="div" />
                    </div>
                  </div>
                  <div className="resumen-container">
                    <h2>Resumen de datos:</h2>
                    {/* Mostrar un resumen de los datos ingresados en cada paso */}
                    <div>
                      <p>Nombre: {values.firstName}</p>
                      <p>Apellido: {values.lastName}</p>
                      <p>Fecha de nacimiento: {values.dateOfBirth}</p>
                      <p>Email: {values.email}</p>
                      <p>Numero: {values.phoneNumber}</p>
                      <p>Programa de estudios: {values.programOfStudy}</p>
                      <p>Nivel de estudios: {values.educationLevel}</p>
                      <p>Calle: {values.street}</p>
                      <p>Ciudad: {values.city}</p>
                      <p>Codigo postal: {values.zipCode}</p>
                    </div>
                  </div>
                </FormSteps>
              )}

              {/* Botones de Navegación */}
              <div className="button-group">
                {/* Deshabilitamos el botón de "Anterior" en el primer paso */}
                {currentStep > 1 && (
                  <button type="button" onClick={() => handlePrevStep()}>
                    Anterior
                  </button>
                )}
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={() => handleNextStep()}
                    disabled={isSubmitting}
                  >
                    Siguiente
                  </button>
                ) : (
                  // Si el formulario no ha sido confirmado, mostramos el botón de confirmación
                  !isConfirmed && (
                    <button
                      type="button"
                      onClick={() => handleConfirmation(values)}
                    >
                      Confirmar
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Botón de Enviar */}
            {isConfirmed && (
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                Enviar
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikFormExample;
