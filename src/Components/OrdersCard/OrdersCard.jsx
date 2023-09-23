

const OrdersCard = ({ totalPrice, totalProduct }) => {

  return (
    <article className="flex justify-between items-center mb-3 relative border border-black">
      <p>
        <span>{"23-10-23"}</span>
        <span>{totalPrice}</span>
        <span>{totalProduct}</span>
      </p>
    </article>
  )
}

export default OrdersCard