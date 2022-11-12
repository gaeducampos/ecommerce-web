
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar.component';
import CardComponent from './components/Card.component'
import Products from './components/Products.component';

import useFetch from './hooks/useFetch'
import determineCategory from './services/determineCategory';

import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import ProductFilterPage from './components/FilteredProducts.page';
import useFilterInfo from './hooks/useFilter';
import Product from './components/Product.component';
import Footer from './components/footer.component';

const App = () => {
  const url = "https://fakestoreapi.com/products/" // url de donde hacemos fetch
  const productData = useFetch(url)
  const [filterData, setFilterData] = useState([])
  const [currentDataDisplay, setCurrentDataDisplay] = useState("Todos nuestros productos")
  const [productId, setProductId] = useState(0)

  useFilterInfo(url, setFilterData)

  const filterProducts = (btnName) => {
    const newArray = productData.data.filter((product) => product.category === btnName)
    setFilterData(newArray)

    setCurrentDataDisplay((prevState) => {
      let titleCategory = prevState
      titleCategory = determineCategory(btnName)
      return titleCategory
    })
  }


  return (
    <div>
      <NavBar filterProducts={filterProducts} setCurrentDataDisplay={setCurrentDataDisplay} />
      <Routes>
        <Route path='/' element={productData.status === "success" &&
          <div className="col-md-12 py-md-3 px-md-5">
            <h1>{currentDataDisplay}</h1>
            <Products setProductId={setProductId} data={productData.data} />
          </div>} />

        <Route path='/product' element={productData.status === "success" &&
          <ProductFilterPage setProductId={setProductId} currentDataDisplay={currentDataDisplay} filterData={filterData} />} />

        <Route path={`product/singleProduct`} element={productData.status === "success" && <Product id={productId} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
