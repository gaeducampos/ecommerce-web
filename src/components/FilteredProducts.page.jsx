import CardComponent from "./Card.component";
import Products from "./Products.component";


// Esta es la representacion del componente cuando los elementos sean filtrados, el array contendra los elementos filtrados, y se hace un componente para que sea ordenado y se puede reutilizar
const ProductFilterPage = ({ filterData, currentDataDisplay, setProductId }) => {
  return (
    <div className="col-md-12 py-md-3 px-md-5">
      <h1>Filtrado por: {currentDataDisplay}</h1>
      {/* se ejuta las funciones de los hoook, en el cual se le pide un ID a cada producto para mostrarlo solo, y se le pasa la data filtrada */}
      {/* tambien se manda a llamar el componente "product" para reutilizarlo y favorecernos de react*/}
      <Products setProductId={setProductId} data={filterData} />
    </div>
  )
}

export default ProductFilterPage