import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const AppShell = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppShell;
