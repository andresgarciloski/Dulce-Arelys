import { useEffect, useState } from "react"
import FormSesion from "./FormSesion"
import FormRegistro from "./FormRegistro"
import { openAlert } from "../global/Global"

const ModalSesion = () => {
  const [checked, setChecked] = useState(false)
  const [acitveSession, setActiveSession] = useState(false)
  const { open } = openAlert()


  const handleCheck = () => {
    checked ? setChecked(false) : setChecked(true)
  }
  
  const openModal = () => {
    const modalElement = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement
    if (modalElement) {
      modalElement.showModal()
    }
  }

  const exitSession = () => {
    localStorage.removeItem("id")
    window.location.reload()
  }

  useEffect(() => {
      const id =  localStorage.getItem("id")
      if (id) {
        setActiveSession(true)
      } else {
        setActiveSession(false)
      }
  }, [])

  return (
    <div>
      <button className="btn" onClick={() => {acitveSession ? exitSession() : openModal()}}>
        {acitveSession ? 'Cerrar Sesion' : 'Iniciar sesion'}
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
        {open && <div role="alert" className="alert alert-success absolute bottom-0 w-96 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Registrado correctamente!. Inicia sesion.</span>
        </div>}  
      </dialog>
    </div>
  )
}

export default ModalSesion
