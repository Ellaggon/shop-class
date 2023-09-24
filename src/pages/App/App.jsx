import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShopingCardProvider } from '../../Context/Context'
import Home from '../Home/Home'
import MyAccount from '../MyAccount/myAccount'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/MyOrders'
import NotFound from '../NotFound/NotFound'
import SignIn from '../SignIn/signIn'
import Navbar from '../../Components/Navbar/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu/CheckoutSideMenu'
import '../../assets/index.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element:<Home /> },
    { path: '/my-account', element:<MyAccount /> },
    { path: '/my-order', element:<MyOrder /> },
    { path: '/my-orders', element:<MyOrders /> },
    { path: '/my-orders/last', element:<MyOrder /> },
    { path: '/my-orders/:id', element:<MyOrder /> },
    { path: '/sign-in', element:<SignIn /> },
    { path: '/*', element:<NotFound /> },
  ])

  return routes;
}

const App = () => {
  return (
    <ShopingCardProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShopingCardProvider>
  )
}

export default App
