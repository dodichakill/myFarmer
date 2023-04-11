import React from "react";
import Page from "../components/templates/page";
import ListCart from "../components/molecules/ListCart";
import Button from "../components/atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function DetailProduct() {
  return (
    <>
      <Page>
        <div className="myContainer py-20 flex justify-between relative">
          {/* main start */}
          <div className="w-full flex max-w-5xl p-5 ">
            <div className="w-64 h-64 bg-red-100 rounded-lg">
              <img
                src="/assets/img/imgProduct.png"
                alt="product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-[40em] ml-10">
              <h2 className="text-2xl font-bold text-green-800">
                Jagung Manis Master Sweet 250GR
              </h2>
              <div className="flex mt-5 gap-x-20">
                <p className="text-2xl font-bold text-black">RP 50.000</p>
                <div className="text-green-500 text-xl">
                  <FontAwesomeIcon icon={faLocationDot} />{" "}
                  <span className="ml-2">Kota Tegal</span>
                </div>
              </div>
              <div className="w-full p-2 my-5 border-t-2 border-b-2 flex">
                <img
                  src="/assets/img/imgToko.png"
                  alt="toko"
                  className="w-14 h-w-14 mr-5"
                />
                <div className="flex flex-col">
                  <p className="text-slate-600 text-sm">Toko Pertanian</p>
                  <p className="text-black text-xl font-bold'">
                    Duren Jaya Tani
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-green-700 font-bold ">Deskripsi</p>
                <p className="text-slate-500 my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus laborum consequuntur minima error similique
                  accusamus. Vitae facere doloribus, eaque minima beatae qui
                  voluptatibus, sed nesciunt delectus distinctio impedit
                  blanditiis doloremque quia explicabo animi cum! Dolorum quas
                  dolores omnis magni similique facere quisquam.
                </p>
                <p className="text-slate-500 my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus laborum consequuntur minima error similique
                  accusamus. doloremque ipsam alias quibusdam provident fuga at
                  repellendus eius nemo? Culpa voluptates quidem cupiditate
                  quaerat ut facilis amet, doloremque maiores velit explicabo,
                  assumenda facere totam omnis possimus, quia voluptatem.
                  Doloremque perspiciatis sed at quia natus
                </p>
              </div>
            </div>
          </div>
          {/* main end */}

          {/* card order start */}
          <div className="w-72 h-fit p-5 bg-white rounded sticky top-32 shadow">
            <h2 className="font-bold text-slate-700 text-xl">
              Atur Jumlah Stok
            </h2>
            <div className="flex gap-x-2 text-slate-400 my-2">
              <p>Total Stock : </p>
              <span className="font-bold text-black">925</span>
            </div>
            <div className="flex w-full justify-between pt-2 items-center ">
              <Button type="etc">
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <p className="text-xl text-black font-bold">10</p>
              <Button type="etc">
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
            <Button customStyle="w-full mt-5 rounded-xl">Beli Sekarang</Button>
          </div>
          {/* card order end */}
        </div>
      </Page>
    </>
  );
}
