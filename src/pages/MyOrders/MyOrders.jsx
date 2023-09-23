import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopingCardContext } from "../../Context/Context";
import OrdersCard from "../../Components/OrdersCard/OrdersCard";

function MyOrders () {
  const context = useContext(ShopingCardContext);
  console.log(context.order)

  return (
    <article>
        <h1 className="text-center">My Orders</h1>
      {
          context.order.map((order, index) => {
            <Link key={index} to={`/my-orders/${order.id}`}>
              <OrdersCard
                totalPrice={order.totalPrice} 
                totalProduct={order.totalProduct} />
            </Link>
          })
        }
    </article>
  )
}

export default MyOrders