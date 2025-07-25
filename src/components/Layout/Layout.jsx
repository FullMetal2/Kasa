import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";

function Layout() {
  return (
    <div className="general-layout">
      <Header />
      <main className="container-layout">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
