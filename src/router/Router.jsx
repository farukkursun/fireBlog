import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import Details from "../pages/Details";
import UpdateBlog from "../pages/UpdateBlog";
import PrivatRouter from "./PrivatRouter";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/new" element={<NewBlog />} />
        <Route path="/details/:id" element={<PrivatRouter />}>
          <Route path="" element={<Details />} />
        </Route>
        <Route path="/updateblog/:id" element={<UpdateBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
