import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
import Home from "../Home";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default Layout;
