
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs';
import Home from './Pages/Home/Home';
import TotalProduct from './Pages/Home/TotalProduct';
import TotalReviews from './Pages/Home/TotalReviews';
import Navbar from './Pages/Shared/Navbar';
import Dashboard from '../src/Pages/Dashboard/Dashboard'
import Login from '../src/Pages/Login/Login'




function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/totalproduct' element={<TotalProduct></TotalProduct>}></Route>
        <Route path='/totalreviews' element={<TotalReviews></TotalReviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
