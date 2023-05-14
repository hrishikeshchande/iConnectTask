import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import ProductDetails from './component/ProductDetail/ProductDetail';

function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/products/:productId" element={<ProductDetails/>} ></Route>
        </Routes>
    </>
  );
}

export default App;
