import React from "react";
import Page from "../components/templates/page";
import ListCart from "../components/molecules/ListCart";
import Button from "../components/atoms/Button";

export default function DetailProduct() {
  return (
    <>
      <Page>
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

          <div className="w-80 h-fit p-5 bg-white rounded sticky top-32 shadow">
            <h2 className="font-bold text-slate-700 text-xl">
              Atur Jumlah Stok
            </h2>
            <div className="flex gap-x-2 text-slate-400 my-2">
              <p>Total Stock : </p>
              <span className="font-bold">925</span>
            </div>
            <div className="flex w-full justify-between pt-4 ">
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
