import { createContext, useState } from "react";

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
      setOrder
    }}> 
      {children}
    </ShopingCardContext.Provider>
  )
}