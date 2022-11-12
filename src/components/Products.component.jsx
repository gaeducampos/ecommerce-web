import React from "react";

import CardComponent from "./Card.component";


// Componente de react Products: Este coponente es la representacion de la todas las filas de lo que se muestra en las pantallas de inicio y los filtros
const Products = ({ data, setProductId }) => {
  return (
    // aca se utliza el metodo "map" para iterar como el arreglo y mientras se itera solo el arreglo se retorno html para retornar cada componente de forma dinamica usando las facilidades de react
    <div className="row">
      {data.map((product) => {
        const { id, image, price, title } = product
        return (
          // Se manda a llamar al componente "CardComponent" para reutilizarlo y demostrar que estamos reutilizando nuestro codigo haciendo que todo sea mas eficiente
          <CardComponent setProductId={setProductId} image={image} id={id} price={price} title={title} key={id} />
        )
      })}
    </div>
  )
}

export default Products