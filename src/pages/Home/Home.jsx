import { useState, useEffect } from "react"
import apiUrl from "../../api/api"
import Card from "../../components/Card/Card";

import ProductDetail from "../../Components/ProductDetail/ProductDetail";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setItems(data)

      } catch (error) {
        console.error(`Ocurrio un error: ${error}`);
      }
    }
    fetchData() 
    }, [])

  return (

    <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      <h1 className="text-center">Home</h1>
      {
        items?.map((el) => (
          <Card key={el.id} {...el}/>
        ))
      }
    <ProductDetail />
    </section>

  )
}

export default Home