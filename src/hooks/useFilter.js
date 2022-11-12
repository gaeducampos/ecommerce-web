import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";


// este es otro custom HOOK que nos va a permitir hacer otra llamada asincrona en especifico que va a consumir la informacion para cuando esta necesite ser filtrada
const useFilterInfo = (url, setFilteredData) => {

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setFilteredData(data)
      }
    }

    getData()
  }, [url])
}

export default useFilterInfo