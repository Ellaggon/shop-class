import PropTypes from "prop-types"

const OrderCard = ({ id, title, images, price, handleDelete }) => {
//   OrderCard.prototype = {
//     title: PropTypes.node.isRequired,
//     images: PropTypes.node.isRequired,
//     price: PropTypes.node.isRequired,
// }

  return (
    <article className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img 
          className="w-full h-full rounded-lg object-cover"
          src={images?.[0]} 
          alt={title} />
        </figure>
        <p>{title}</p>
      </div>
        <div className='flex items-center'>
          <p>${price}</p>
          {
            handleDelete && 
            <button
            className="flex justify-end items-center bg-white w-10 h-10 rounded-full"
            onClick={()=>handleDelete(id)}>
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          }
        </div>
    </article>
    
  )
}

export default OrderCard