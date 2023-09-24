import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopingCardContext } from "../../Context/Context";
import OrdersCard from "../../Components/OrdersCard/OrdersCard";

function MyOrders () {
  const context = useContext(ShopingCardContext);
  // const id = crypto.randomUUID();
  // const [ productID ] = useState(id)

  return (
    <article>
        <h1 className="text-center">My Orders</h1>
      {
          context.order.map((order, id) => (
            <Link key={id} to={`/my-orders/${id}`}>
              <OrdersCard
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts} />
            </Link>
          ))
        }
    </article>
  )
}

export default MyOrders