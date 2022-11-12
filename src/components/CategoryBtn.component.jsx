import React from "react";
import { Link } from "react-router-dom";
import determineCategory from "../services/determineCategory";


// Este es el componente de los botones que vemos en la barra de negacion, se crea uno solo con informacion logica, ya que la idea de react es reutilizar los componentes
const CustomBtn = ({ category, filterProducts }) => {
  return (
    <div className="py-3">
      {/* // cuando se ejecuta esa funcion de abajo "filterProducts" filtra todos los datos que estan almacenados en el arreglo para el tipo de filtro que se espera cuando le damos click al boton que el usuario desea*/}
      <Link to="/product" className="custom-btn btn-3"
        onClick={() => filterProducts(category)} variant="outline-primary"><span>{determineCategory(category)}</span></Link>
    </div>
  )
}




export default CustomBtn