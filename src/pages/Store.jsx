import React from "react";
import Page from "../components/templates/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/atoms/Button";

export default function Store() {
  return (
    <Page typeNavbar="etc">
      <div className="myContainer py-5">
        <div className="h2 text-green-700 text-xl font-bold mb-3">
          Data Akun Toko
        </div>
        <div className="bg-white p-5 shadow w-full flex gap-x-10">
          <div className="w-96">
            <div className="flex justify-between px-5 py-2">
              <p className="text-slate-700 font-bold w-52">Nama Toko</p>
              <p className="text-slate-700 w-full">: Duren Jaya Tani</p>
            </div>
            <div className="flex justify-between px-5 py-2">
              <p className="text-slate-700 font-bold w-52">Username</p>
              <p className="text-slate-700 w-full">: Tani123</p>
            </div>
            <div className="flex justify-between px-5 py-2">
              <p className="text-slate-700 font-bold w-52">Password</p>
              <p className="text-slate-700 w-full">: Duren321</p>
            </div>
            <div className="flex justify-between px-5 py-2">
              <p className="text-slate-700 font-bold w-52">Nomor HP</p>
              <p className="text-slate-700 w-full">: 08093849322</p>
            </div>
            <div className="flex justify-between px-5 py-2">
              <p className="text-slate-700 font-bold w-52">Pemilik Toko</p>
              <p className="text-slate-700 w-full">: Duhri</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between px-5 py-2">
              <p className="text-slate-700 font-bold w-52">Alamat Toko</p>
              <p className="text-slate-700 w-full">
                : Jln desa sumber lor kecamatan babakan kabupaten cirebon
                jawabarat
              </p>
            </div>
            <div className="flex justify-between px-5 py-2">
              <p className="text-slate-700 font-bold w-52">Rekening</p>
              <p className="text-slate-700 w-full">: BCA - 2209209222</p>
            </div>
            <div className="flex justify-between px-5 py-2">
              <p className="text-slate-700 font-bold w-52">Logo Toko</p>
              <p className="text-slate-700 w-full flex">
                <p className="mr-2">:</p>
                <img
                  src="/assets/img/imgToko.png"
                  alt="logo toko"
                  className="w-20 h-20"
                />
              </p>
            </div>
            <div className="px-5 py-2">
              <div className="bg-white p-2 rounded-lg text-green-600 cursor-pointer border-2 border-green-600 font-bold w-fit shadow">
                <FontAwesomeIcon icon={faPenToSquare} />{" "}
                <span className="ml-2">Edit Data</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h2 text-green-700 text-xl mt-10 font-bold mb-3">
          Pendapatan Toko
        </div>
        <div className="flex w-full p-2 gap-4">
          <div className="bg-white shadow rounded-lg p-5 w-56">
            <p className="text-slate-700">Bulan Lalu</p>
            <p className="text-slate-800 text-xl font-bold my-2">9 Juta</p>
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-56">
            <p className="text-slate-700">Bulan Sekarang</p>
            <p className="text-slate-800 text-xl font-bold my-2">10 Juta</p>
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-56">
            <p className="text-slate-700">Total Pendapatan</p>
            <p className="text-slate-800 text-xl font-bold my-2">19 Juta</p>
          </div>
          <Button customStyle="ml-5">Cairkan Sekarang</Button>
        </div>
      </div>
    </Page>
  );
}
