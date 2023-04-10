import {
  faMinus,
  faPlus,
  faShop,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ListCart() {
  return (
    <div className="border-b-2 border-slate-200 flex items-center w-full">
      <input type="checkbox" className="checkbox checkbox-info " id="all" />
      <div className="w-full p-5 pb-2 flex">
        <div className="w-40 h-28 rounded-lg">
          <img
            src="/public/assets/img/imgProduct.png"
            alt="img"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="w-[40em] h-full  box-border p-5 flex flex-col items-start">
          <p className="font-semibold text-slate-600 mb-2">
            Jagung Manis Master Sweet 250GR
          </p>
          <p className="text-black font-bold mb-2">Rp 50.0000</p>
          <div className="text-green-600 flex gap-x-2 items-center">
            <FontAwesomeIcon icon={faShop} /> <span>Duren Jaya Tani</span>
          </div>
        </div>
        <div className="w-80 flex">
          <div className="flex justify-between items-center">
            <div className="btn bg-red-500 rounded-lg text-white border-0 text-base mr-2">
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
            <div className="btn bg-slate-500 text-white rounded-full border-0 text-base">
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <div className="px-5 py-2 text-xl text-center bg-white rounded-lg text-green-600 font-bold">
              1
            </div>
            <div className="btn bg-green-500 text-white rounded-full border-0 text-base ">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
