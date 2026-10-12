import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import OtpVerification from "./pages/OtpVerification";

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route path="/" element={<Registration />}></Route>
  <Route path="/login" element={<Login />}></Route>
  <Route path="/otpverification/:email/:otp" element={<OtpVerification />}></Route>
  <Route path="/home" element={<Home />}></Route>
  </>
),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
