import React from "react";
import { Link } from "react-router-dom";


// SE CREA EL COMPONENTE CARDCOMPONENT: ESTE COMPONENTE ES LA REPRESENTACION DE SOLO UNA CARTA EN LA VISTA PRINCIPAL
const CardComponent = ({ id, image, price, title, setProductId }) => {
  // todos esos parametros del component se les conoce como "propiedades del componente, estamos usando todas esas para pasar la informacion"

  // se crea una funcion "getId" para obtener el id de cada producto y poder mostrarla individualmente
  const getProductId = (id) => {
    return id
  }


  // diseño de la vista que se va a renderizar apartir del componente, donde se ejecutan ciertas funciones
  return (
    <div className="col-6 col-md-6 col-lg-4 mb-3" key={id}>
      <div className="card h-100">
        <img src={image} className="m-3" style={{ height: "300px", width: "auto", objectFit: "contain" }} alt={title} />
        <div className="m-3 mb-0">
          <small className="card-title">{title.substring(0, 50)}...</small>
        </div>
        <div style={{ marginTop: "auto" }}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="m-3"><b>${price}</b></div>
            {/* // se crea un boton de "Link" que pertence a la libreria de enrutamiento que hace que la app sea dinamica, cuando se la click se le redirige a ese sistema de enrutamiento dinamico con el evento "onClick" */}
            <Link onClick={() => setProductId(getProductId(id))} to='/product/singleProduct' className="details-link" >Ver detalles</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent