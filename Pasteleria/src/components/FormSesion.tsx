import { FormEvent, useState } from "react";
const FormSesion = () => {
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");
  const [alert, setAlert] = useState(false);

  const handleSeion = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const URL = "http://localhost:3000/api/v1/inicioSesion";
    const data = {
      correo,
      pass,
    };
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length < 1) {
          setAlert(true)
          return;
        }
        const Usuerio = JSON.stringify(data[0]);
         // Aquí obtienes el idRol del usuario
         const idRol = data[0].IdRol; 

        localStorage.setItem("id", data[0].IdUsuario);
        localStorage.setItem("Usuario", Usuerio);
        localStorage.setItem("idRol", idRol); 


        window.location.reload()
        window.location.href = "http://localhost:3000/Inicio"
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img
        src="./cake.jpeg"
        className="w-[300px] h-[300px] rounded-md"
        alt=""
      />
      <form onSubmit={handleSeion} className="flex flex-col items-center justify-center gap-4">
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
            className="grow"
          />
        </label>
        {alert && <span className="text-pink-400 font-bold" >Usuario/Contraseña incorrectos.</span>}
        <button className="btn btn-outline btn-secondary">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

export default FormSesion;
