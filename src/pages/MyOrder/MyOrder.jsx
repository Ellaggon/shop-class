import { useContext } from "react"
import { ShopingCardContext } from "../../Context/Context";
import OrderCard from "../../Components/OrderCard/OrderCard";

function MyOrder () {
  const context = useContext(ShopingCardContext);
  console.log(context.order?.slice(-1)[0]?.products)

  return (
    <div>
      <h1 className="text-center mb-5">MyOrder</h1>
      <article className="flex flex-col w-80">
        {
          context.order?.slice(-1)[0]?.products.map(el => (
            <OrderCard key={el.id} {...el}/>
          ))
        }
        </article>
    </div>
  )
}

export default MyOrder