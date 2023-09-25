import { createContext, useState, useEffect } from "react";
import apiUrl from "../api/api"

export const ShopingCardContext = createContext();

export const ShopingCardProvider = ({children}) => {

  //Shoping Card - increment quantity
  const [count, setCount] = useState(0)

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu - Open/Close
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false)
  const openCheckoutMenu = () => setIsCheckoutMenuOpen(true)
  const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false)
  
  // Product Detail - Show product
  //Utilizamos parametros en el useState por error de "images[0]"
  const [productToShow, setProductToShow] = useState({
    // title: "",
    // price: "",
    // description: "",
    // images: [],
  });
  
  // Shopping card - add products to card
  const [cardProducts, setCardProducts] = useState([])

  // Shopping card - Order "creamos una orden de compra, es decir un listado con los productos escogidos en el carrito mas su info"
  const [order, setOrder] = useState([])

  // Get products of api
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  
  // Get products by search title
  const [searchByTitle, setSearchByTitle] = useState(null);
  console.log(searchByTitle)

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

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

    console.log(filteredItems)

  return (
    <ShopingCardContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cardProducts,
      setCardProducts,
      openCheckoutMenu,
      closeCheckoutMenu,
      isCheckoutMenuOpen,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      setFilteredItems
    }}> 
      {children}
    </ShopingCardContext.Provider>
  )
}