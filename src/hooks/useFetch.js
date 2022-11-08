import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState({
    status: 'idle', // 1. sin informacion, 2, ok obtengo informacion? -> la obtengo o falla 3. output
    data: [],
    error: null
  })

  useEffect(() => {
    const getData = async () => {
      try {
        setFetchedData((prevState) => ({
          ...prevState, // todo lo qu contiene las propiedades del estado los "..."
          status: "loading",
        }))
        const reponse = await fetch(url) // mandamos a hacer la peticion al serevidor
        if (reponse.ok) {
          const data = await reponse.json()
          setFetchedData({
            status: "success", // la peticion salio correctamente
            data: data,
            error: null
          })
        } else {
          setFetchedData({ // dado caso de error queremos que el estado cambie a error
            data: [],
            status: "error",
            error: new Error(response.statusText)
          });
        }

      }
      catch (error) { // en el catch tomar el error si en dado caso falla la peticion 
        setFetchState({
          data: [],
          status: "error",
          error: error
        })
      }
    }

    getData()

  }, [url])

  return fetchedData
}

export default useFetch