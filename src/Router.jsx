import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SignIn from './Pages/Auth/SignIn';
import Cart from './Pages/Cart/Cart';
import Orders from './Pages/Orders/Orders';
import Payment from './Pages/Payment/Payment';
import Landing from './Pages/Landing/Landing'; 
import Result from './Pages/Results/Result';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<SignIn />} />
                <Route path="/payments" element={<Payment />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/category/:categoryName" element={<Result />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products/:productId" element={<ProductDetail/>} />
            </Routes>
        </Router>
    );
}

export default Routing;
