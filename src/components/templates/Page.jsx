import React from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import { pageStyle } from "./pageStyle";

export default function Page(props) {
  return (
    <div className="relative">
      <Header />
      <div style={{ margin: "10px" }}>{props.children}</div>
      <Footer />
    </div>
  );
}
