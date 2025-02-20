import React from "react";
import Login from "./pages/Login";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
