import React from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

export default function Header({ type = "default" }) {
  return type == "default" ? (
    <div className="w-full bg-green-200 sticky top-0 z-50">
      <div className="navbar myContainer py-4">
        <div className="flex-1">
          <img src="/assets/img/imgNavLogo.png" alt="logo" className="w-12" />
          <span className="font-bold text-green-700 ml-3 text-xl">
            MyFarmer
          </span>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                key={1}
                to="/"
                className="text-green-700 active:bg-green-100 font-semibold"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                key={2}
                to="/product"
                className="text-green-700 font-semibold active:bg-green-100 "
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                key={3}
                to="/education"
                className="text-green-700 font-semibold active:bg-green-100 "
              >
                Edukasi
              </Link>
            </li>
            <li>
              <Link
                key={4}
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
  ) : (
    <div className="w-full bg-green-200 sticky top-0 z-50">
      <div className="navbar myContainer py-4">
        <div className="flex-1">
          <img src="/assets/img/imgNavLogo.png" alt="logo" className="w-12" />
          <span className="font-bold text-green-700 ml-3 text-xl">
            MyFarmer
          </span>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                key={1}
                to="/stock"
                className="text-green-700 active:bg-green-100 font-semibold"
              >
                Manajemen Stock
              </Link>
            </li>
            <li>
              <Link
                key={2}
                to="/store"
                className="text-green-700 font-semibold active:bg-green-100 "
              >
                Pengaturan Toko
              </Link>
            </li>
            <li>
              <Button type="secondary" url="/">
                Keluar
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
