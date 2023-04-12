import React from "react";
import Page from "../components/templates/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/atoms/Button";
import CardArticle from "../components/molecules/CardArticle";
import CardVideo from "../components/molecules/CardVideo";

export default function Education() {
  return (
    <>
      <Page>
        <div className="myContainer">
          <div className="w-full p-5 my-5 bg-green-700 rounded-lg">
            <h2 className="text-xl text-center text-white">Halaman Edukasi</h2>
          </div>
          <h3 className="font-bold text-green-700 mb-3 capitalize">
            Kategori artikel
          </h3>
          <CardArticle name="Intensifikasi Pertanian: Pengertian dan Contohnya" />
          <CardArticle
            name="Cara menjadi petani yang sukses"
            imgUrl="/public/assets/img/education/tips sukses.jpg"
            date="09/04/2023"
          />

          <h3 className="font-bold text-green-700 mb-3 capitalize">
            Kategori Video
          </h3>
          <div className="flex p-2 gap-5 overflow-x-auto pb-4">
            <CardVideo name="Menanam Cabe Rawit tanpa olah tanah " />
            <CardVideo
              name="Memaksimalkan potensi tanah untuk pertanian "
              imgUrl="/public/assets/img/education/tips sukses.jpg"
            />
            <CardVideo name="Menanam Cabe Rawit tanpa olah tanah " />
            <CardVideo
              name="Memaksimalkan potensi tanah untuk pertanian "
              imgUrl="/public/assets/img/education/tips sukses.jpg"
            />
            <CardVideo name="Menanam Cabe Rawit tanpa olah tanah " />
          </div>
        </div>
      </Page>
    </>
  );
}
