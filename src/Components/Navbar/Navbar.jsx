import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopingCardContext } from '../../Context/Context'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

const Navbar = () => {
  const context = useContext(ShopingCardContext)
  const activeStyle = "underline underline-offset-4"

  // SignOut
  const signOut = localStorage.getItem("sign-out")
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut

  // Account 
  const account = localStorage.getItem("account")
  const parsedAccount = JSON.parse(account)

  // Has an account 
  const noAccountInLocalStorage = parsedAccount? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  // verificar cierre de sesion, es decir cambiar el valor a true
  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem("sign-out", stringifiedSignOut) 
    context.setSignOut(true)
  }

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut){
      return (
        <>
          <li>
            <NavLink 
              to="/my-orders/"
              className={({ isActive }) => 
              isActive ? activeStyle : undefined
              }>
                My Orders
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/my-account/"
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/sign-in/"
              className={({isActive}) => 
              isActive ? activeStyle : undefined}
              onClick={() => handleSignOut()}>
              Sign Out
            </NavLink>
          </li>
        </>
      )
  } else {
    return (
      <li>
        <NavLink 
          to="/sign-in"
          className={({ isActive }) => isActive ? activeStyle : undefined}
          onClick={() => handleSignOut()}>
            Sign In
        </NavLink>
      </li>
      )
  }
}
  return (
    <nav className='flex justify-between items-center fixed w-full z-10 top-0 py-5 px-8 text-sm font-light bg-white/75'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to={isUserSignOut? "sign-in": "/"}>
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
          onClick={() => context.setSearchByCategory("others")}
          className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        {renderView()}
        <li className='flex items-center'>
          <ShoppingCart />    
        </li>
      </ul>
    </nav>
  )
}

  <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>

export default Navbar