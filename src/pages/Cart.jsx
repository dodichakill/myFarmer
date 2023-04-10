import React from "react";
import Page from "../components/templates/page";
import ListCart from "../components/molecules/ListCart";
import Button from "../components/atoms/Button";

export default function Cart() {
  return (
    <>
      <Page>
        <h2 className="myContainer text-green-600 font-bold text-lg mt-10">
          Keranjang
        </h2>
        <div className="myContainer py-5 flex justify-between relative">
          <div className="w-full max-w-3xl p-5">
            <div className="flex flex-col">
              <div className="border-b-2 border-slate-200 flex items-center w-full">
                <input
                  type="checkbox"
                  className="checkbox checkbox-info mr-5"
                  id="all"
                />
                <label className="cursor-pointer label" htmlFor="all">
                  Pilih semua
                </label>
              </div>
            </div>
            <ListCart />
            <ListCart />
            <ListCart />
            <ListCart />
            <ListCart />
          </div>
          <div className="w-1/3 h-fit p-5 bg-white rounded sticky top-32">
            <h2 className="font-bold text-slate-700 text-xl">
              Ringkasan Belanja
            </h2>
            <div className="flex w-full justify-between text-slate-400">
              <p>Total Harga (5 barang) </p>
              <p>Rp 150.000</p>
            </div>
            <div className="flex w-full justify-between text-slate-400">
              <p>Ongkos Kirim </p>
              <p>Rp 15.000</p>
            </div>
            <div className="flex w-full justify-between text-slate-400 mb-5">
              <p>Fee </p>
              <p>Rp 1.000</p>
            </div>
            <div className="flex w-full justify-between pt-4 border-t-2">
              <h2 className="font-bold text-slate-700 text-xl">Total Harga</h2>
              <p className="text-slate-400 font-bold">Rp 166.000</p>
            </div>
            <Button customStyle="w-full mt-5 rounded-xl">Beli Sekarang</Button>
          </div>
        </div>
      </Page>
    </>
  );
}
