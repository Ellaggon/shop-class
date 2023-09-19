import { createContext, useState } from "react";

export const ShopingCardContext = createContext();

export const ShopingCardProvider = ({children}) => {

  //Shoping Card - increment quantity
  const [count, setCount] = useState(0)

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Product Detail - Show product
  //Utilizamos parametros en el useState por error de "images[0]"
  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  return (
    <ShopingCardContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow
    }}> 
      {children}
    </ShopingCardContext.Provider>
  )
}