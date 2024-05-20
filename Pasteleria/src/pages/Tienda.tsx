import { useEffect, useState } from "react";
import type { Tienda } from "../Types/Tienda";


const Tienda = () => {
    const [productos, setProductos] = useState([])
    const [ProdSeleccionado, setProdSeleccionado] = useState([{}])
    useEffect(() => {
        const URL = 'http://10.100.45.100:3000/api/v1/Productos'
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            setProductos(data)
        })
        .catch(error => console.error("Error:", error))
    }, [])

    const openModal = (id: number, nombre: string, UrlImg: string, DescripcionProducto: string, PrecioProducto: string ) => {
        const modalElement = document.getElementById(
          "my_modal_3"
        ) as HTMLDialogElement
        if (modalElement) {
          modalElement.showModal()
        }
        
        const Prod = [{
            id,
            nombre,
            UrlImg,
            DescripcionProducto,
            PrecioProducto
        }]
        console.log(Prod);
        
        setProdSeleccionado(Prod)
      }
    return(
    <div className="flex items-center flex-wrap p-10 gap-3">
        {productos.map((producto: Tienda) => {
            const UrlImg = "http://localhost:3000/" + producto.ImagenProducto;
            return (
                <div key={producto.IdProducto} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={UrlImg} alt={producto.nombre} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{producto.NombreProducto}</h2>
                        <p>{producto.DescripcionProducto}</p>
                        <span>${producto.PrecioProducto}</span>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={()=> openModal(producto.IdProducto, producto.NombreProducto, UrlImg, producto.DescripcionProducto, producto.PrecioProducto)}>Comprar</button>
                        </div>
                    </div>
                </div>
            );
        })}

        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img src={ProdSeleccionado[0].UrlImg} alt="" className="w-80" />
                    <h3 >{ProdSeleccionado[0].nombre}</h3>
                    <span>${ProdSeleccionado[0].PrecioProducto}</span>
                    <p>{ProdSeleccionado[0].DescripcionProducto}</p>
                    <button className="btn btn-success">Comprar</button>
                </div>
            </div>
        </dialog>
    </div>
    )
}

export default Tienda;