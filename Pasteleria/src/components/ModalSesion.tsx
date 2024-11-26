import { useEffect, useState } from "react";
import FormSesion from "./FormSesion";
import FormRegistro from "./FormRegistro";
import { openAlert } from "../global/Global";

const ModalSesion = () => {
  const [checked, setChecked] = useState(false);
  const [activeSession, setActiveSession] = useState(false);
  const { open } = openAlert();

  const handleCheck = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  const openModal = () => {
    const modalElement = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement;
    if (modalElement) {
      modalElement.showModal();
    }
  };

  const exitSession = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("idRol"); // Asegúrate de eliminar el idRol también
    window.location.reload();
  };

  const goToAdminPanel = () => {
    const usuario = localStorage.getItem("Usuario"); // Obtener el objeto Usuario del localStorage
  
    if (usuario) {
      const usuarioObj = JSON.parse(usuario); // Convertir la cadena JSON a un objeto JavaScript
      const idRol = usuarioObj.idRol; // Acceder al atributo idRol del objeto
      if (idRol === 1) { 
        window.location.href = "http://localhost:3000/Inicio"; // Redirigir al panel
      } else {
        alert("Debes ser un usuario con privilegios de administrador");
      }
    } else {
      // Manejar el caso en que no se encuentre el objeto "Usuario" en el localStorage
      console.error("No se encontró el objeto Usuario en el localStorage"); 
      alert("Error al obtener la información del usuario.");
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    console.log(id);
    if (id) {
      setActiveSession(true);
    } else {
      setActiveSession(false);
    }
  }, []);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          activeSession ? exitSession() : openModal();
        }}
      >
        {activeSession ? "Cerrar Sesion" : "Panel Administrativo"}
      </button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-gradient-to-tr from-slate-50 to-pink-300">
          <div className="flex flex-col items-center justify-center gap-4">
            {checked ? <FormRegistro /> : <FormSesion />}
            <div className="form-control">
              <label className="label cursor-pointer flex gap-3">
                <span className="label-text">Registrarse</span>
                <input
                  onClick={handleCheck}
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-pink-300"
                  defaultChecked={checked}
                />
              </label>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
        {open && (
          <div
            role="alert"
            className="alert alert-success absolute bottom-0 w-96 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Registrado correctamente!. Inicia sesion.</span>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default ModalSesion;