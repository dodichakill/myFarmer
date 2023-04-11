import React from "react";
import Button from "../components/atoms/Button";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full p-2 flex justify-center items-center">
        <img src="/assets/img/imgIlustration.png" alt="ilustration" />
      </div>
      <div className="w-full p-5 flex justify-center items-center">
        <div className="w-96 p-5">
          <h2 className="text-black text-2xl font-bold">MyFarmer</h2>
          <p className="mt-2 text-slate-500">
            silahkan daftar terlebih dahulu sebelum menggunakan MyFarmer
          </p>
          <input
            type="text"
            placeholder="Username"
            className="bg-white input input-bordered w-full max-w-xs mt-5"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white input input-bordered w-full max-w-xs mt-3"
          />
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="bg-white input input-bordered w-full max-w-xs mt-3"
          />
          <input
            type="text"
            placeholder="Alamat"
            className="bg-white input input-bordered w-full max-w-xs mt-3"
          />
          <input
            type="text"
            placeholder="Nomor HP"
            className="bg-white input input-bordered w-full max-w-xs mt-3"
          />
          <p className="font-bold text-slate-400 mt-2">Daftar Sebagai:</p>
          <div className="flex w-full text-slate-400 mt-1">
            <div className="flex items-center gap-x-2 mr-5">
              <input
                type="radio"
                name="radio-4"
                className="radio radio-accent"
                id="buyer"
                checked
              />{" "}
              <label htmlFor="buyer" className="cursor-pointer">
                Pembeli
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                name="radio-4"
                id="seller"
                className="radio radio-accent"
              />
              <label htmlFor="seller" className="cursor-pointer">
                Pemilik Toko
              </label>
            </div>
          </div>

          <div className="mt-4 pb-5 border-b-2 border-slate-200 flex gap-x-5">
            <Button>Daftar Sekarang</Button>{" "}
            <Button type="etc" url="/">
              kembali
            </Button>
          </div>
          <p className="mt-4">
            Belum Punya akun?
            <Link to="/login" className="ml-2 font-bold text-green-600">
              Masuk Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
