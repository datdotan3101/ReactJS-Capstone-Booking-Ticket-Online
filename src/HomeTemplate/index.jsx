import React from "react";
import Header from "./_component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./_component/Footer";

export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
