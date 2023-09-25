import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopingCardContext } from '../../Context/Context'

const Navbar = () => {
  const context = useContext(ShopingCardContext)
  const activeStyle = "underline underline-offset-4"

  return (
    <nav className='flex justify-between items-center fixed w-full z-10 top-0 py-5 px-8 text-sm font-light bg-white/75'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink 
          to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
          to='/'
          onClick={() => context. setSearchByCategory()}
          className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/clothes"
          onClick={() => context. setSearchByCategory("clothes")}
          className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/electronics"
          onClick={() => context. setSearchByCategory("electronics")}
          className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/furniture"
          onClick={() => context. setSearchByCategory("furniture")}
          className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/shoes"
          onClick={() => context. setSearchByCategory("shoes")}
          className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/others"
          onClick={() => context. setSearchByCategory("others")}
          className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li>
          <NavLink to="/">
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothes">
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/electronics">
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center'>
          <svg 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-6"><path d="M19.148 2.971A2.008 2.008 0 0 0 17.434 2H6.566c-.698 0-1.355.372-1.714.971L2.143 7.485A.995.995 0 0 0 2 8a3.97 3.97 0 0 0 1 2.618V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8.382A3.97 3.97 0 0 0 22 8a.995.995 0 0 0-.143-.515l-2.709-4.514zm.836 5.28A2.003 2.003 0 0 1 18 10c-1.103 0-2-.897-2-2 0-.068-.025-.128-.039-.192l.02-.004L15.22 4h2.214l2.55 4.251zM10.819 4h2.361l.813 4.065C13.958 9.137 13.08 10 12 10s-1.958-.863-1.993-1.935L10.819 4zM6.566 4H8.78l-.76 3.804.02.004C8.025 7.872 8 7.932 8 8c0 1.103-.897 2-2 2a2.003 2.003 0 0 1-1.984-1.749L6.566 4zM10 19v-3h4v3h-4zm6 0v-3c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H5v-7.142c.321.083.652.142 1 .142a3.99 3.99 0 0 0 3-1.357c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357A3.99 3.99 0 0 0 18 12c.348 0 .679-.059 1-.142V19h-3z" />
          </svg>
          <div>
            {context.count} 
          </div>
        </li>
      </ul>
    </nav>
  )
}
<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>

export default Navbar