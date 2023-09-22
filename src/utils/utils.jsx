// Funcion que nos permite sumar los precios de los articulos en el carrito

export const totalPrice = (products) => {
  return products.reduce((sum, product) => product.price + sum, 0)
}