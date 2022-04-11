import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import Register from "./components/Register"
import Login from "./components/Login"
import OtpVerification from "./components/OtpVerification"
import ForgotPassword from "./components/ForgotPassword"
import Aboutus from "./components/AboutUs"

import TermsAndConditions from "./components/TermsAndConditions"
import ProductCategory from "./components/ProductCategory"
import Cart from "./components/Cart"
import Faq from "./components/Faq"

import Admin from "./admin/Admin"
import Developedby from "./components/DevelopedBy"
import CartNew from "./components/CartNew"
import Checkout from "./components/Checkout"
import PlaceOrder from "./components/PlaceOrder"

import Profile from "./components/Profile"
import AdminManage from "./admin/AdminManage"
import AdminAllProductsList from "./admin/AdminAllProductsList"
import AllOrders from "./components/AllOrders"
import AllUserList from "./admin/AllUserList"
import UsersManage from "./admin/UsersManage"
import AddProduct from "./admin/AddProduct"
import DeleteProduct from "./admin/DeleteProduct"
import ModifyProduct from "./admin/ModifyProduct"
import Feedback from "./components/Feedback"
import FeedbackList from "./admin/FeedbackList"
import ViewFeedback from "./admin/ViewFeedback"
import OrderDetails from "./components/OrderDetails"

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/productCategory" element={<ProductCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allProductsList" element={<AdminAllProductsList />} />
          <Route path="/adminManage" element={<AdminManage />} />
          <Route path="/adminlogin" element={<Admin />} />
          <Route path="/developeby" element={<Developedby />} />
          <Route path="/cartNew" element={<CartNew />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/viewFeedback" element={<ViewFeedback />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/allOrders" element={<AllOrders />} />
          <Route path="/userManage" element={<UsersManage />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/feedbackList" element={<FeedbackList />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/modifyProduct" element={<ModifyProduct />} />
          <Route path="/deleteProduct" element={<DeleteProduct />} />
          <Route path="/allUsers" element={<AllUserList />} />
          <Route path="/allOrders" element={<AllOrders />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App