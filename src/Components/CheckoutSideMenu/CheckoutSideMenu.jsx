import { useContext } from "react";
import { ShopingCardContext } from "../../Context/Context";

const CheckoutSideMenu = ( ) => {
  const context = useContext(ShopingCardContext);

  return (
    <aside 
    className={`${context.isCheckoutMenuOpen ? "flex" : "hidden"} flex flex-col fixed right-0 m-3 border border-black bg-white rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order fuck yeah</h2>
        <button
          onClick={() => context.closeCheckoutMenu()}
          className="flex justify-center items-center bg-white w-10 h-10 rounded-full">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
        </button>
      </div>
      <figure className="px-6 flex items-center">
        <img 
        className="w-20 h-20 rounded-lg"
        src={context.productToShow.images?.[0]} 
        alt={context.productToShow.title} />
      <p className="flex flex-col p-6">
        <span className="font-madium text-2xl">${context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow.title}</span>
      </p>
      </figure>
    </aside>
  )
}

export default CheckoutSideMenu