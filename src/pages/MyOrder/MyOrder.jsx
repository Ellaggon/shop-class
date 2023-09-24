import { useContext } from "react"
import { Link, useParams } from "react-router-dom";
import { ShopingCardContext } from "../../Context/Context";
import OrderCard from "../../Components/OrderCard/OrderCard";

function MyOrder () {
  const context = useContext(ShopingCardContext);
  let params = useParams();
  // Usamos el operador OR || para imprimir dependiendo si estamos en la pagina del "id" o de "last" la informacion de la orden de productos en cuestion
  // console.log(context.order[params.id])
  // console.log(context.order?.slice(-1)[0].products)
  let orderID = context.order?.[params.id] || context.order?.slice(-1)[0]

  return (
    <section>
      <div className="flex items-center justify-center relative w-80">
        <Link to="/my-orders/">  
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute left-0 cursor-pointer top-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1 className="text-center">My Order</h1>
      </div>
      <article className="flex flex-col w-80 mt-10">
        {
          orderID.products.map(el => (
            <OrderCard key={el.id} {...el}/>
          ))
        }
      </article>
    </section>
  )
}

export default MyOrder