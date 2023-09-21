import { useContext } from "react";
import { ShopingCardContext } from "../../Context/Context";
import OrderCard from "../OrderCard/OrderCard";

const CheckoutSideMenu = ( ) => {
  const context = useContext(ShopingCardContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cardProducts.filter(product => product.id != id)
    context.setCardProducts(filteredProducts)
    context.setCount(context.count -1)
  }

  return (
    <aside 
    className={`${context.isCheckoutMenuOpen ? "flex" : "hidden"} scrollable-cards flex flex-col fixed right-0 border mb-3 border-black bg-white rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
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
      <div className="px-4 overflow-y-scroll">
      {
        context.cardProducts?.map(el => (
          <OrderCard key={el.id} handleDelete={handleDelete} {...el}/>
        ))
      }
      </div>
    </aside>
  )
}

export default CheckoutSideMenu