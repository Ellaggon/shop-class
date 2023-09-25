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
  console.log(filteredItems)
  
  // Get products by search title
  const [searchByTitle, setSearchByTitle] = useState(null);
  
  // Get products by search category
  const [searchByCategory, setSearchByCategory] = useState(null);
  console.log(searchByCategory)

  //Usamos useEfect para extraer los datos mediante un fetch y async await de la API
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


  // Creamos una funcion para filtrar los resultados de busqueda dentro de items
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  const filteredItemsByCategory = (items, searchByCategory) => {
    console.log("items: ", items)
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  // usamos filterBy para hacer una busqueda tanto por title como por category
  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE_&_CATEGORY"){
      return filteredItemsByTitle(items, searchByTitle).filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    if (searchType === "BY_TITLE"){
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === "BY_CATEGORY"){
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (!searchType){
      return items
    }
  }
  
  // Usamos un useEfect para guardar los resultados de busqueda en filteredItems
  useEffect(() => {
    if(searchByTitle && searchByCategory) setFilteredItems( filterBy("BY_TITLE_&_CATEGORY", items, searchByTitle, searchByCategory))
    if(searchByTitle && !searchByCategory) setFilteredItems( filterBy("BY_TITLE", items, searchByTitle, searchByCategory))
    if(!searchByTitle && searchByCategory) setFilteredItems( filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory))
    if(!searchByTitle && !searchByCategory) setFilteredItems( filterBy(null, items,  searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])


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
      setFilteredItems,
      searchByCategory,
      setSearchByCategory
    }}> 
      {children}
    </ShopingCardContext.Provider>
  )
}