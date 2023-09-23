import { useContext } from "react"
import { Link } from "react-router-dom";
import { ShopingCardContext } from "../../Context/Context";
import OrderCard from "../../Components/OrderCard/OrderCard";

function MyOrder () {
  const context = useContext(ShopingCardContext);

  return (
    <section>
      <div className="flex items-center justify-center relative w-80">
        <Link to="/my-orders/">  
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute left-0 cursor-pointer top-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1 className="text-center">My Orders</h1>
      </div>
      <article className="flex flex-col w-80 mt-10">
        {
          context.order?.slice(-1)[0]?.products.map(el => (
            <OrderCard key={el.id} {...el}/>
          ))
        }
        </article>
    </section>
  )
}

export default MyOrder