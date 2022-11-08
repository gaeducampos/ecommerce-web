import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Card from './components/Card.component'

import useFetch from './hooks/useFetch'

function App() {
  const [data, setData] = useState([]) // single source of true, el punto de la app donde toda la informacion es unica y inmutable
  const url = "https://fakestoreapi.com/products/" // url de donde hacemos fetch

  const productData = useFetch(url)


  "map, sort, forEach, filter, ....."



  return (
    <div className="App">
      {productData.data.map((product) => {
        const { category, description, image, price, title, rating } = product
        return (
          <Card category={category}
            description={description}
            image={image}
            price={price}
            title={title}
            rating={rating} />
        )
      })}
    </div>
  )
}

export default App
