import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShopingCardProvider } from './Context/Context'
import Home from './pages/Home/Home'
import MyAccount from './pages/MyAccount/myAccount'
import MyOrder from './pages/MyOrder/MyOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import NotFound from './pages/NotFound/NotFound'
import SignIn from './pages/SignIn/signIn'
import Navbar from './Components/Navbar/Navbar'
import './assets/App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element:<Home /> },
    { path: '/my-account', element:<MyAccount /> },
    { path: '/my-order', element:<MyOrder /> },
    { path: '/my-orders', element:<MyOrders /> },
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
      </BrowserRouter>
    </ShopingCardProvider>
  )
}

export default App
