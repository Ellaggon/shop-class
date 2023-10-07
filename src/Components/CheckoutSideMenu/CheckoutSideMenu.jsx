import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopingCardContext } from "../../Context/Context";
import OrderCard from "../OrderCard/OrderCard";
import { totalPrice } from "../../utils/utils"

const CheckoutSideMenu = ( ) => {
  const context = useContext(ShopingCardContext);

  // El boton x elimina un producto del listado en CheckoutSideMenu
  const handleDelete = (id) => {
    const filteredProducts = context.cardProducts.filter(product => product.id != id)
    context.setCardProducts(filteredProducts)
    context.setCount(context.count -1)
  }
  // El boton Checkout mandara el listado de la orden ejecutada a una base de datos
    const handleCheckout = () => {
      const orderToAdd = {
        date: "22.10.23",
        products: context.cardProducts,
        totalProducts: context.cardProducts.length,
        totalPrice: totalPrice(context.cardProducts),
      }
      context.setOrder([...context.order, orderToAdd])
      context.setCardProducts([]) // Limpia el carrito al presionar "Checkout"
      context.setCount(0)
      context.closeCheckoutMenu()
      context.setSearchByTitle(null)
    }
  
    return (
      <aside 
      className={`${context.isCheckoutMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-5 border mt-1 border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}>
        <div className="flex justify-between items-center p-4">
          <h2 className="font-medium text-xl m-3">My Order</h2>
          <button
            onClick={() => context.closeCheckoutMenu()}
            className="flex justify-end items-center bg-white w-10 h-10 rounded-full">
              <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
          </button>
        </div>

        <article className="px-4 overflow-y-scroll flex-1 bg-white shadow">
        {
          context.cardProducts?.map(el => (
            <OrderCard key={el.id} handleDelete={handleDelete} {...el}/>
          ))
        }
        </article>

        <p className="flex justify-around items-end pt-4 mx-5 font-semibold">
          <span >TOTAL</span>
          <span className="text-2xl">$ {totalPrice(context.cardProducts)}</span>
        </p>
        <Link className="flex justify-center" to="/my-orders/last" >
          <button 
          onClick={() => handleCheckout()}
          className="rounded-lg bg-black text-white my-4 px-20 py-2">
            Checkout
          </button>
        </Link>
      </aside>
    )
  }

export default CheckoutSideMenu