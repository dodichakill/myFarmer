import React from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export default function Page({ typeNavbar, children }) {
  return (
    <div className="relative">
      <Header type={typeNavbar} />
      <div style={{ margin: "10px" }}>{children}</div>
      <Footer />
    </div>
  );
}
