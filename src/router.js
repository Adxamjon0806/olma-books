import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" />
        <Route path="/registration" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
