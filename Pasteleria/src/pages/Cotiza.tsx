import { FormEvent, useEffect, useState } from "react";

const Cotiza = () => {
  const [id_Usuario, setIdUsuario] = useState("");
  const [tam_Pastel, setTamPastel] = useState("");
  const [sabor_Pastel, setSaborPastel] = useState("");
  const [betun_Pastel, setBetunPastel] = useState("");
  const [relleno_Pastel, setRellenoPastel] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [pastel_Precio, setPastelPrecio] = useState("");
  const [pastel_Comentarios, setPastelComentarios] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertEnvio, setAlertEnvio] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setIdUsuario(id);
    }
  }, [])
  
  const handleForm = (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    id_Usuario === "" && setAlert(true)
    id_Usuario === "" &&  setTimeout(() => { setAlert(false) }, 3000)
    if (id_Usuario === "") return;
    const URL = "http://localhost:3000/api/v1/Cotizacion"
    const data = {
      id_Usuario, 
      tam_Pastel, 
      sabor_Pastel, 
      betun_Pastel, 
      relleno_Pastel, 
      cantidad, 
      pastel_Precio, 
      pastel_Comentarios
    }
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((_data) => {
        setTamPastel("")
        setSaborPastel("")
        setBetunPastel("")
        setRellenoPastel("")
        setCantidad("")
        setPastelPrecio("")
        setPastelComentarios("")
        setAlertEnvio(true)
        setTimeout(() => {
          setAlertEnvio(false)
        }, 3000)
      }).catch((error) => {
      console.error("Error:", error)
    })

  }
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-[50%] flex flex-col justify-center items-center">
        <div className="w-[90%]">
          <h1 className="text-6xl font-bold">Crea tu pastel!</h1>
          <div className="flex flex-col mt-10 gap-4text-xl">
            <p>
              Personaliza tu propio pastel eligiendo las diferentes opciones que
              tenemos para ti. Danos tu nombre y tu numero celular para ponernos
              en contacto contigo.
            </p>
          </div>
          <form onSubmit={handleForm}>
            <div className="flex flex-wrap  gap-2 justify-center items-center mt-9">
              <select name="tam_Pastel" onChange={(e) => setTamPastel(e.target.value)} className="select select-bordered w-full max-w-xs">
                  <option disabled selected>Tamaño</option>
                  <option value="Pastel" >Pastel</option>
                  <option value="Pastelito" >Pastelito</option>
                  <option value="Pastelon" >Pastelon</option>
                  <option value="Gigante" >Gigante</option>
                  <option value="Mini" >Mini</option>
              </select>
              <select name="sabor_Pastel" onChange={(e) => setSaborPastel(e.target.value)} className="select select-bordered w-full max-w-xs">
                  <option disabled selected>Sabor</option>
                  <option value="Clasico" >Clasico</option>
                  <option value="Dulce" >Dulce</option>
                  <option value="Chocolate" >Chocolate</option>
                  <option value="Especial" >Especial</option>
                  <option value="Combinado" >Combinado</option>
              </select>
              <select name="betun_Pastel" onChange={(e) => setBetunPastel(e.target.value)} className="select select-bordered w-full max-w-xs">
                  <option disabled selected>Betun</option>
                  <option value="Buttercream" >Buttercream</option>
                  <option value="Merengue suizo" >Merengue suizo</option>
                  <option value="Merengue italiano" >Merengue italiano</option>
                  <option value="Betún de queso crema" >Betún de queso crema</option>
                  <option value="Crema pastelera">Crema pastelera</option>
              </select>
              <select name="relleno_Pastel" onChange={(e) => setRellenoPastel(e.target.value)} className="select select-bordered w-full max-w-xs">
                  <option disabled selected>Relleno</option>
                  <option value="Dulce de leche">Dulce de leche</option>
                  <option value="Crema pastelera">Crema pastelera</option>
                  <option value="Mantecol con cacao y nueces">Mantecol con cacao y nueces</option>
                  <option value="Natillas cremosas">Natillas cremosas</option>
                  <option value="Crema de mantequilla dulce">Crema de mantequilla dulce</option>
              </select>
              <input type="number" placeholder="Cantidad" onChange={(e) => setCantidad(e.target.value)} className="input input-bordered w-full max-w-xs" />
              <input type="number" value={pastel_Precio} placeholder="Propon tu precio" onChange={(e) => setPastelPrecio(e.target.value)} className="input input-bordered w-full max-w-xs" />
              <textarea className="textarea textarea-bordered w-full" onChange={(e) => setPastelComentarios(e.target.value)} placeholder="Comentarios"></textarea>
              <div className="w-full flex justify-center items-center">
                <button type="submit" className="btn btn-outline btn-secondary">Enviar propuesta</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center w-[50%]">
        <img
          className="mask mask-parallelogram w-[58%] h-full"
          src="/cake.jpeg"
        />
      </div>
      {alert && <div role="alert" className="alert alert-error absolute bottom-1 w-80">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error! Inicia sesion.</span>
      </div>}
      {alertEnvio && <div role="alert" className="alert alert-info absolute bottom-1 w-80">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Se mando correctamente su cotizacion.</span>
      </div>}
    </div>
  );
};

export default Cotiza;
