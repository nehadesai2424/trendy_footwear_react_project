
//import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import AllProducts from './components/AllProducts'
import About from './components/About'
import Contact from './components/Contact'
import AdminLogin from './components/admin/AdminLogin'
import Products from './components/admin/Products'
import AddProduct from './components/admin/AddProduct'
import AdminPage from './components/admin/AdminPage'
import Dashboard from './components/admin/Dashboard'
import Order from './components/admin/Order'
import User from './components/admin/User'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderComplete from './components/OrderComplete'


import "./assets/css/style.css"
import "animate.css"

// import "./assets/css/animate.css"
// import "./assets/css/bootstrap-datepicker.css"
// import "./assets/css/bootstrap.min.css"
// import "./assets/css/flexslider.css"
// import "./assets/css/ionicons.min.css"
// import "./assets/css/magnific-popup.css"
// import "./assets/css/owl.carousel.min.css"
// import "./assets/css/owl.theme.default.min.css"




import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path={'/about'} element={<About></About>}></Route>
          <Route path={'/all-products'} element={<AllProducts></AllProducts>}></Route>
          <Route path={'/contact'} element={<Contact></Contact>}></Route>
          <Route path={'/admin-login'} element={<AdminLogin></AdminLogin>}></Route>

          <Route path={'/admin'} element={<AdminPage />} >
            <Route index element={<Dashboard />}></Route>
            <Route path={'/admin/addproduct'} element={<AddProduct />}></Route>
            <Route path={'/admin/addproduct/:id'} element={<AddProduct />}></Route>


            <Route path={'/admin/products'} element={<Products />}></Route>
            <Route path={'/admin/orders'} element={<Order />}></Route>
            <Route path={'/admin/user'} element={<User />}></Route>
          </Route>

          <Route path={'/cart'} element={<Cart></Cart>}></Route>
          <Route path={'/checkout'} element={<Checkout></Checkout>}></Route>
          <Route path={'/order-complete'} element={<OrderComplete></OrderComplete>}></Route>

        </Routes>
        <Footer />

      </BrowserRouter>




      {/* <Header/>
      <Home/> 
      <AllProducts/>
      <About/> 
      <Contact/> 
      <Footer/>  */}

    </div>
  );
}

export default App;
