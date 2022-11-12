import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import determineCategory from "../services/determineCategory";


// SE CREA EL COMPONENTE PRODUCT
const Product = ({ id }) => {
  // se solicita el "id" como propiedad del componente, porque basado en el id del producto vamos a hacer una peticion continuamente, recordar que: cuando cambie el id se hara una peticion nueva

  const [product, setProduct] = useState([]); // hook que generar un arreglo donde solo se almacena un producto en la peticion a la API


  // utilizacion del hook "useEffect" para hacer la llamada asincrona a la API 
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      if (response.ok) {
        const data = await response.json()
        setProduct(data) // almacenamos la informacion dentro del "state" o arreglo mencionado arriba
      }
    }

    getData() // se ejecuta la funcion asincrona
  }, [id])


  // diseño de un template usando boostrap-react de como se veria un solo producto
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-9">
        <div className="d-flex align-items-center m-3">
          <i className="fa fa-long-arrow-left"></i>
          <Link to='/' className="home-link">Regresar al inicio </Link>
        </div>
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="images p-3">
                <div className="text-center p-4">
                  <img id="main-image" alt="producto" src={product.image} width="260" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border p-4">
                <div className="mt-4 mb-3">

                  <span className="text-muted text-capitalize"> departamento: {determineCategory(product.category)}</span>

                  <h5 className="text-uppercase">
                    {product.title}
                  </h5>

                  Rating {product.rating && product.rating.rate} ⭐️
                  <i className="fa fa-star text-warning"></i>

                  <div className="price d-flex flex-row align-items-center">
                    <big className="display-6"><b>Precio: ${product.price}</b></big>
                  </div>
                </div>
                <p className="text-muted">Descripción: {product.description}</p>
                <div className="cart mt-4 align-items-center"> <button className="btn btn-outline-dark text-uppercase ">Comprar Ahora </button> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

