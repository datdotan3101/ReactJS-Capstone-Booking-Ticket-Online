import React from "react";
import Header from "./_component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./_component/Footer";

export default function HomeTemplate() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
