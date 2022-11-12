// se crea esta funcion llamada "determineCategory" nos ayudara para traducir la informacion en los botones, esta se crea un archivo Services porque aqui es donde se almacenan las funciones que son utilizadas en mas de 2, 3 o x Cantidad de lugares en todo nuestro proyecto

const determineCategory = (category) => {
  switch (category) {
    case "electronics":
      return "Electrónicos"
    case "men's clothing":
      return "Ropa Hombre"
    case "women's clothing":
      return "Ropa Mujer"
    case "jewelery":
      return "Joyería"
  }
}

export default determineCategory