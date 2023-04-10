import React from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

export default function Header() {
  return (
    <div className="w-full bg-green-200 sticky top-0 z-50">
      <div className="navbar myContainer py-4">
        <div className="flex-1">
          <img
            src="/public/assets/img/imgNavLogo.png"
            alt="logo"
            className="w-12"
          />
          <span className="font-bold text-green-700 ml-3 text-xl">
            MyFarmer
          </span>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className="text-green-700 active:bg-green-100 font-semibold"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="text-green-700 font-semibold active:bg-green-100 "
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="text-green-700 font-semibold active:bg-green-100 "
              >
                Edukasi
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-green-700 font-semibold active:bg-green-100 "
              >
                Keranjang
              </Link>
            </li>
            <li>
              <Button type="secondary" url="/login">
                Masuk
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
