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

export default Navbar