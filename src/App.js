
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs';
import Home from './Pages/Home/Home';
import TotalProduct from './Pages/Home/TotalProduct';
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




function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='totalproduct' element={<TotalProduct />}></Route>
        <Route path='totalreviews' element={<TotalReviews />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>

        {/* nested route  */}
        <Route path='dashboard' element={<Dashboard />}>
          <Route path='myorders' element={<MyOrders></MyOrders>} />
          <Route path='addaproduct' element={<AddAProduct />} />
          <Route path='addreview' element={<AddReview />} />
          <Route path='manageproduct' element={<ManageProduct />
          } />
          <Route path='manageallorders' element={<ManageAllOrders />} />
          <Route path='myprofile' element={<MyProfile />} />
        </Route>


        {/* login route */}

        <Route path='login' element={<Login />}></Route>
        <Route path='Signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

    </div>
  );
}

export default App;
