import React from "react";
import Page from "../components/templates/page";
import Button from "../components/atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Stock() {
  return (
    <Page typeNavbar="etc">
      <div className="myContainer py-10">
        <div className="h2 text-green-700 text-xl font-bold mb-3">
          Daftar Produk
        </div>
        <Button>Tambah produk</Button>

        <div className="overflow-x-auto mt-4">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="">
                <th>Nama produk</th>
                <th>Foto Produk</th>
                <th>Harga Produk</th>
                <th>Deskripsi Produk</th>
                <th>Stock Produk</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jagung Manis Master Sweet 250GR</td>
                <td>
                  <img
                    src="/assets/img/imgProduct.png"
                    alt="product"
                    className="w-20 h-20"
                  />
                </td>
                <td>
                  <span className="font-bold">Rp 50.0000</span>{" "}
                </td>
                <td>Lorem ipsum dolor sit amet ...</td>
                <td>898</td>
                <td>
                  <div className="bg-white p-2 rounded-lg text-green-600 cursor-pointer border-2 border-green-600 font-bold">
                    <FontAwesomeIcon icon={faPenToSquare} />{" "}
                    <span className="ml-2">Edit</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg text-red-600 cursor-pointer border-2 border-red-600 font-bold">
                    <FontAwesomeIcon icon={faTrash} />{" "}
                    <span className="ml-2">Hapus</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jagung Manis Master Sweet 250GR</td>
                <td>
                  <img
                    src="/assets/img/imgProduct.png"
                    alt="product"
                    className="w-20 h-20"
                  />
                </td>
                <td>
                  <span className="font-bold">Rp 50.0000</span>{" "}
                </td>
                <td>Lorem ipsum dolor sit amet ...</td>
                <td>898</td>
                <td>
                  <div className="bg-white p-2 rounded-lg text-green-600 cursor-pointer border-2 border-green-600 font-bold">
                    <FontAwesomeIcon icon={faPenToSquare} />{" "}
                    <span className="ml-2">Edit</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg text-red-600 cursor-pointer border-2 border-red-600 font-bold">
                    <FontAwesomeIcon icon={faTrash} />{" "}
                    <span className="ml-2">Hapus</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jagung Manis Master Sweet 250GR</td>
                <td>
                  <img
                    src="/assets/img/imgProduct.png"
                    alt="product"
                    className="w-20 h-20"
                  />
                </td>
                <td>
                  <span className="font-bold">Rp 50.0000</span>{" "}
                </td>
                <td>Lorem ipsum dolor sit amet ...</td>
                <td>898</td>
                <td>
                  <div className="bg-white p-2 rounded-lg text-green-600 cursor-pointer border-2 border-green-600 font-bold">
                    <FontAwesomeIcon icon={faPenToSquare} />{" "}
                    <span className="ml-2">Edit</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg text-red-600 cursor-pointer border-2 border-red-600 font-bold">
                    <FontAwesomeIcon icon={faTrash} />{" "}
                    <span className="ml-2">Hapus</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jagung Manis Master Sweet 250GR</td>
                <td>
                  <img
                    src="/assets/img/imgProduct.png"
                    alt="product"
                    className="w-20 h-20"
                  />
                </td>
                <td>
                  <span className="font-bold">Rp 50.0000</span>{" "}
                </td>
                <td>Lorem ipsum dolor sit amet ...</td>
                <td>898</td>
                <td>
                  <div className="bg-white p-2 rounded-lg text-green-600 cursor-pointer border-2 border-green-600 font-bold">
                    <FontAwesomeIcon icon={faPenToSquare} />{" "}
                    <span className="ml-2">Edit</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg text-red-600 cursor-pointer border-2 border-red-600 font-bold">
                    <FontAwesomeIcon icon={faTrash} />{" "}
                    <span className="ml-2">Hapus</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="h2 text-green-700 text-xl mt-10 font-bold mb-3">
          Informasi Orderan
        </div>
        <div className="flex w-full p-2 gap-4">
          <div className="bg-white shadow rounded-lg p-5 w-56">
            <p className="text-slate-700">Pesanan baru</p>
            <p className="text-slate-800 text-xl font-bold my-2">10</p>
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-56">
            <p className="text-slate-700">Orderan Sukses</p>
            <p className="text-slate-800 text-xl font-bold my-2">50</p>
          </div>
          <div className="bg-white shadow rounded-lg p-5 w-56">
            <p className="text-slate-700">Orderan Gagal</p>
            <p className="text-slate-800 text-xl font-bold my-2">2</p>
          </div>
        </div>
      </div>
    </Page>
  );
}
