
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
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/totalproduct' element={<TotalProduct></TotalProduct>}></Route>
        <Route path='/totalreviews' element={<TotalReviews></TotalReviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard>

          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='/addaproduct' element={<AddAProduct></AddAProduct>}></Route>
          <Route path='/addreview' element={<AddReview></AddReview>}></Route>
          <Route path='/manageproduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='/manageallorders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='/myprofile' element={<MyProfile></MyProfile>}></Route>
        </Dashboard>}>

        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
