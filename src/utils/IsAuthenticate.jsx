import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function IsAuthenticate({ children }) {
  const isAuthenticate = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticate && location.pathname !== "/login") {
      navigate("/login");
    } else if (isAuthenticate) {
      navigate("/home");
    }
  }, [isAuthenticate, navigate]);

  return <>{children}</>;
}
