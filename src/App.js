
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs';
import Home from './Pages/Home/Home';

import TotalReviews from './Pages/Home/TotalReviews';
import Navbar from './Pages/Shared/Navbar';
import Dashboard from '../src/Pages/Dashboard/Dashboard'
import Login from '../src/Pages/Login/Login'
import NotFound from './Pages/Shared/NotFound';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddReview from './Pages/Dashboard/AddReview';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import Products from './Pages/Products/Products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyPortfolio from './Pages/Home/MyPortfolio';
import Users from './Pages/Dashboard/Users';
import ContactUs from './Pages/Shared/ContactUs';
import About from './Pages/Shared/About';




function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<RequireAuth>
          <Products />
        </RequireAuth>}></Route>

        <Route path='totalreviews' element={<TotalReviews />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>
        <Route path='myportfolio' element={<MyPortfolio />}></Route>

        {/* nested route  */}
        <Route path='dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route path='myorders' element={<MyOrders></MyOrders>} />
          <Route path='addaproduct' element={<AddAProduct />} />
          <Route path='addreview' element={<AddReview />} />
          <Route path='manageproduct' element={<ManageProduct />
          } />
          <Route path='manageallorders' element={<ManageAllOrders />} />
          <Route path='users' element={<Users />} />
          <Route path='myprofile' element={<MyProfile />} />
        </Route>


        {/* login route */}

        <Route path='login' element={<Login />}></Route>
        <Route path='Signup' element={<Signup />}></Route>
        <Route path='contactus' element={<ContactUs />}></Route>
        <Route path='aboutus' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
