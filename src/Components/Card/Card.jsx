import { useContext } from "react"
import { ShopingCardContext } from "../../Context/Context"

const Card = ({id, title, images, price, description, category: {name}} ) => {
  const context = useContext(ShopingCardContext)

  const showProduct = (el) => {
    context.openProductDetail()
    context.setProductToShow(el)
  }
  
  const addProductsToCard = (e, el) => {
    e.stopPropagation()
    context.setCardProducts([...context.cardProducts, el])
    context.setCount(context.count + 1)
    context.openCheckoutMenu()
    context.closeProductDetail()
    console.log("card: ", context.cardProducts)
  }

  return (
    <div 
      className={"bg-white cursor-pointer w-56 h-60 rounded-lg mr-2 truncate"}
      onClick={() => showProduct({id, title, images, price, description} )}
      >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 px">{name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={title} />
        <button 
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        onClick={(e) => addProductsToCard(e, {id, title, images, price, description} )}>

          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.0019 20C11.0019 20.5523 11.4497 21 12.0019 21C12.5542 21 13.0019 20.5523 13.0019 20L13.0019 12.9999L20.0019 12.9999C20.5542 12.9999 21.0019 12.5522 21.0019 11.9999C21.0019 11.4476 20.5542 10.9999 20.0019 10.9999H13.0019L13.0019 4C13.0019 3.44772 12.5542 3 12.0019 3C11.4497 3 11.0019 3.44772 11.0019 4V10.9999H4.00195C3.44967 10.9999 3.00195 11.4476 3.00195 11.9999C3.00195 12.5522 3.44967 12.9999 4.00195 12.9999H11.0019V20Z" fill="black"/>
          </svg>

        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-bold">{price}</span>
      </p>
    </div>
  )
}

export default Card