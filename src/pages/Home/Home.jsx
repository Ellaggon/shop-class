import { useContext } from "react"
import { ShopingCardContext } from "../../Context/Context";
import Card from "../../Components/Card/Card";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const context = useContext(ShopingCardContext);

  // renderWiew crea una condicional si existe la busqueda "searchByTitle" y si es mayor a 0 retornara los resultados filtrados sino es mayor a 0 retornara items
  const renderView = () => {
    const itemsToRender = context.filteredItems?.length > 0
    ? context.filteredItems
    : context.items;

    if(itemsToRender?.length > 0){
      return itemsToRender?.map(item => (
        <Card key={item.id} {...item}/>
      ));
    } else {
      return Loader();
    };
  }

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-3 m-auto items-center">
      <article className="flex justify-center items-center col-span-2 gap-1 mb-5 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 md:w-40 md:h-40 mt-1 md:p-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
      <div className="flex flex-col items-start md:gap-4" >
        <h1 className="font-medium text-xl md:text-3xl">Exclusive Products</h1>
        <input 
          type="text" 
          placeholder="Search a product" 
          className="w-48 md:w-80 md:p-3 p-2 border border-black rounded-lg focus:outline-none"
          onChange={(e) => context.setSearchByTitle(e.target.value)}/>
      </div>
      </article>
      {
        renderView()
      }
    </section>
  )
}

export default Home