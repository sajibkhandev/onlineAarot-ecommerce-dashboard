import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import OtpVerification from "./pages/OtpVerification";
import ForgetPassword from "./pages/ForgetPassword";
import ChangePassword from "./pages/ChangePassword";
import CreateProduct from "./pages/CreateProduct";
import ViewProduct from "./pages/ViewProduct";
import CreateVarient from "./pages/CreateVarient";
import ViewVarient from "./pages/ViewVarient";
import CreateCategory from "./pages/CreateCategory";
import ViewCategory from "./pages/ViewCategory";
import CreateSubCategory from "./pages/CreateSubCategory";
import ViewSubCategory from "./pages/ViewSubCategory";
import CreateDiscount from "./pages/CreateDiscount";
import ViewDiscount from "./pages/ViewDiscount";

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route path="/" element={<Registration />}></Route>
  <Route path="/login" element={<Login />}></Route>
  <Route path="/otpverification/:email/:otp" element={<OtpVerification />}></Route>
  <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
  <Route path="/changepassword/:email" element={<ChangePassword />}></Route>
  
  <Route path="/dashboard" element={<Dashboard />}>
     <Route path="createproduct" element={<CreateProduct />}></Route>
     <Route path="viewproduct" element={<ViewProduct />}></Route>
     <Route path="createvarient" element={<CreateVarient />}></Route>
     <Route path="viewvarient" element={<ViewVarient />}></Route>
     <Route path="createcategory" element={<CreateCategory />}></Route>
     <Route path="viewcategory" element={<ViewCategory />}></Route>
     <Route path="createsubcategory" element={<CreateSubCategory />}></Route>
     <Route path="viewsubcategory" element={<ViewSubCategory />}></Route>
     <Route path="creatediscount" element={<CreateDiscount />}></Route>
     <Route path="viewdiscount" element={<ViewDiscount />}></Route>
  </Route>
  </>
),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
