import { useEffect, useState } from "react";
import type { Tienda } from "../Types/Tienda";

const Tienda = () => {
    const [id_Usuario, setIdUsuario] = useState("");
    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState<any>(null);
    const [betun, setBetun] = useState("");
    const [relleno, setRelleno] = useState("");

    useEffect(() => {
        const URL = "http://localhost:3000/api/v1/Productos";
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    useEffect(() => {
        const id = localStorage.getItem("id");
        if (id) {
            setIdUsuario(id);
        }
    }, []);

    const openModal = (producto: any) => {
        const modalElement = document.getElementById(
            "my_modal_3"
        ) as HTMLDialogElement;
        if (modalElement) {
            modalElement.showModal();
        }

        setProductoSeleccionado(producto); // Guardamos el producto directamente
        console.log("Producto seleccionado: ", producto);
    };

    const handleComprar = () => {
        if (!id_Usuario) {
            alert("Por favor, inicie sesión para continuar.");
            return;
        }
    
        if (!productoSeleccionado) {
            alert("No hay producto seleccionado.");
            return;
        }
    
        // Verifica el producto seleccionado
        console.log("Producto seleccionado:", productoSeleccionado);
    
        const URL = "http://localhost:3000/api/v1/Cotizacion";
    
        const data = {
            id_Usuario,
            tam_Pastel: productoSeleccionado.NombreProducto,
            sabor_Pastel: productoSeleccionado.DescripcionProducto,
            betun_Pastel: betun,
            relleno_Pastel: relleno,
            cantidad: 1,
            pastel_Precio: productoSeleccionado.PrecioProducto,
            pastel_Comentarios: "Compra realizada desde Tienda",
        };
    
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Producto guardado correctamente.");
                    const modalElement = document.getElementById(
                        "my_modal_3"
                    ) as HTMLDialogElement;
                    if (modalElement) {
                        modalElement.close();
                    }
                    setBetun("");
                    setRelleno("");
                } else {
                    alert("Error al guardar el producto.");
                }
            })
            .catch((error) => console.error("Error:", error));
    };
    

    return (
        <div className="flex items-center flex-wrap p-10 gap-3">
            {productos.map((producto: Tienda) => {
                const UrlImg = "http://localhost:3000/" + producto.ImagenProducto;
                return (
                    <div key={producto.IdProducto} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src={UrlImg} alt={producto.NombreProducto} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{producto.NombreProducto}</h2>
                            <p>{producto.DescripcionProducto}</p>
                            <span>${producto.PrecioProducto}</span>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => openModal(producto)}
                                >
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    {productoSeleccionado && (
                        <div className="flex flex-col justify-center items-center gap-2">
                            <img
                                src={
                                    "http://localhost:3000/" +
                                    productoSeleccionado.ImagenProducto
                                }
                                alt=""
                                className="w-80"
                            />
                            <h3>{productoSeleccionado.NombreProducto}</h3>
                            <span>${productoSeleccionado.PrecioProducto}</span>
                            <p>{productoSeleccionado.DescripcionProducto}</p>

                            {/* Campo para seleccionar betún */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">
                                        Selecciona el betún:
                                    </span>
                                </label>
                                <select
                                    className="select select-bordered"
                                    value={betun}
                                    onChange={(e) => setBetun(e.target.value)}
                                >
                                    <option value="">Elige un betún</option>
                                    <option value="Chocolate">Chocolate</option>
                                    <option value="Vainilla">Vainilla</option>
                                    <option value="Fresa">Fresa</option>
                                </select>
                            </div>

                            {/* Campo para seleccionar relleno */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">
                                        Selecciona el relleno:
                                    </span>
                                </label>
                                <select
                                    className="select select-bordered"
                                    value={relleno}
                                    onChange={(e) => setRelleno(e.target.value)}
                                >
                                    <option value="">Elige un relleno</option>
                                    <option value="Cajeta">Cajeta</option>
                                    <option value="Frutas">Frutas</option>
                                    <option value="Crema">Crema</option>
                                </select>
                            </div>

                            <button
                                className="btn btn-success mt-4"
                                onClick={handleComprar}
                            >
                                Comprar
                            </button>
                        </div>
                    )}
                </div>
            </dialog>
        </div>
    );
};

export default Tienda;
