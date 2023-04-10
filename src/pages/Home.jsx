import React from "react";
import Page from "../components/templates/page";
import Button from "../components/atoms/Button";

export default function Home() {
  return (
    <>
      <Page>
        <div className="myContainer flex py-32">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl text-black font-semibold capitalize">
              Tingkatkan Produksi pertanianmu dan wawasanmu tentang pertanian
              bersama MyFarmer
            </h1>
            <p className="text-slate-500 mt-5">
              MyFarmer adalah platform Jual Beli Produk Pertanian dan edukasi
              untuk pertanian dan juga untuk para owner toko pertanian untuk
              menjual produknya dan manajemen
            </p>
            <div className="flex mt-5 gap-x-5">
              <Button url="/product">Lihat Produk</Button>
              <Button url="/education" type="etc">
                Lihat Edukasi
              </Button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="/public/assets/img/heroImage.png"
              alt="hero image"
              className="w-[35em]"
            />
          </div>
        </div>
      </Page>
    </>
  );
}
