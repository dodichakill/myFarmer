import React from "react";
import Page from "../components/templates/page";
import Button from "../components/atoms/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full p-2 flex justify-center items-center">
        <img src="/assets/img/imgIlustration.png" alt="ilustration" />
      </div>
      <div className="w-full p-5 flex justify-center items-center">
        <div className="w-96 p-5">
          <h2 className="text-black text-2xl font-bold">MyFarmer</h2>
          <p className="mt-2 text-slate-500">
            silahkan masuk terlebih dahulu sebelum melakukan transaksi{" "}
          </p>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs mt-5 bg-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs mt-3 bg-white"
          />
          <div className="mt-4 pb-5 border-b-2 border-slate-200 flex gap-x-5">
            <Button>Masuk Sekarang</Button>{" "}
            <Button type="etc" url="/">
              kembali
            </Button>
          </div>
          <p className="mt-4">
            Belum Punya akun?
            <Link to="/register" className="ml-2 font-bold text-green-600">
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
