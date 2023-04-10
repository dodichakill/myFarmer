import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchEngine() {
  return (
    <div className="p-5 bg-green-200 my-5 rounded-md flex justify-center items-center ">
      <div className="w-full max-w-3xl m-auto flex items-center justify-center">
        <input
          type="text"
          placeholder="Cari produk yang kamu inginkan di sini..."
          className="input input-bordered w-full max-w-2xl mr-2 bg-white text-slate-500"
        />
        <button className="px-5 py-2 btn text-white">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}
