/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from "react";
import { openAlert } from "../global/Global";

const FormRegistro = () => {
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Pass, setPass] = useState("");
  const { setOpen } = openAlert()

  const handleRegistro = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const URL = "http://10.100.45.100:3000/api/v1/Registro";
    const data = {
      Nombre,
      Apellido,
      Telefono,
      Correo,
      Pass,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then((_data) => {
        setNombre("")
        setApellido("")
        setTelefono("")
        setCorreo("")
        setPass("")
        setOpen(true)
        setTimeout(() => {
          setOpen(false)
        }, 3000)
      }).catch((error) => {
      console.error("Error:", error)
      })
  }
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold">Registrate</h2>
      <form onSubmit={handleRegistro} className="flex flex-col items-center justify-center gap-4">
        <label className="input input-bordered flex items-center gap-2 w-[300px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            value={Nombre}
            className="grow"
            placeholder="Nombre"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-[300px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            onChange={(e) => setApellido(e.target.value)}
            value={Apellido}
            className="grow"
            placeholder="Apellido"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-[300px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="number"
            onChange={(e) => setTelefono(e.target.value)}
            value={Telefono}
            className="grow"
            placeholder="Telefono"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-[300px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="email"
            onChange={(e) => setCorreo(e.target.value)}
            value={Correo}
            className="grow"
            placeholder="Correo"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-[300px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            value={Pass}
            className="grow"
          />
        </label>
        <button className="btn btn-outline btn-secondary">Registrar</button>
      </form>
    </div>
  );
};

export default FormRegistro;
