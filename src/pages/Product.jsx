import React from "react";
import Page from "../components/templates/page";
import SearchEngine from "../components/molecules/SearchEngine";
import CardProduct from "../components/molecules/CardProduct";
import CategoryProduct from "../components/molecules/CategoryProduct";

const listDataBenih = [
  {
    id: 1,
    name: "benih jagung",
    price: "30.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/benih/benihJagung.png",
  },
  {
    id: 2,
    name: "benih Kacang Panjang",
    price: "15.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/benih/benihKacangPanjang.png",
  },
  {
    id: 3,
    name: "benih semangka",
    price: "25.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/benih/benihSemangka.png",
  },
  {
    id: 4,
    name: "benih Terong",
    price: "20.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/benih/benihTerong.png",
  },
  {
    id: 5,
    name: "benih Timun",
    price: "20.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/benih/benihTimun.png",
  },
  {
    id: 6,
    name: "benih Tomat",
    price: "25.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/benih/benihTomat.png",
  },
];

const listDataNutrisi = [
  {
    id: 1,
    name: "Antisep",
    price: "20.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/nutrisi/Antisep.png",
  },
  {
    id: 2,
    name: "egg stimulant",
    price: "45.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/nutrisi/eggStimulant.png",
  },
  {
    id: 3,
    name: "mineral ayam",
    price: "25.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/nutrisi/mineralAyam.png",
  },
  {
    id: 4,
    name: "Super power",
    price: "30.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/nutrisi/superPower.png",
  },
  {
    id: 5,
    name: "trimezyn bolus",
    price: "60.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/nutrisi/TrimezynBolus.png",
  },
  {
    id: 6,
    name: "vita chicks",
    price: "10.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/nutrisi/vitaChicks.png",
  },
];

const listDataPakan = [
  {
    id: 1,
    name: "All Feed 3 30KG",
    price: "240.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pakan/All Feed 3 30KG.png",
  },
  {
    id: 2,
    name: "BA6 30KG",
    price: "200.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pakan/BA6 30KG.png",
  },
  {
    id: 3,
    name: "HI Pro Vite 594 50KG",
    price: "500.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pakan/HI Pro  Vite 594 50KG.png",
  },
  {
    id: 4,
    name: "HI Pro Vite 144 50KG",
    price: "700.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pakan/HI Pro Vite 144 50KG.png",
  },
  {
    id: 5,
    name: "HI Pro Vite 324KJ 50KG",
    price: "400.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pakan/HI Pro Vite 324KJ 50KG.png",
  },
  {
    id: 6,
    name: "raja Bandeng",
    price: "10.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pakan/rajaBandeng.png",
  },
];

const listDataPeralatan = [
  {
    id: 1,
    name: "Imustim",
    price: "240.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/peralatan/Imustim.png",
  },
  {
    id: 2,
    name: "Iyo Tata 16LT",
    price: "120.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/peralatan/Iyo Tata 16LT.png",
  },
  {
    id: 3,
    name: "Multipro Expert 16LT",
    price: "650.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/peralatan/Multipro Expert 16LT.png",
  },
  {
    id: 4,
    name: "Neo Antisep",
    price: "120.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/peralatan/Neo Antisep.png",
  },
  {
    id: 5,
    name: "Swan SA 14BIG",
    price: "500.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/peralatan/Swan SA 14BIG.png",
  },
  {
    id: 6,
    name: "raja Bandeng",
    price: "400.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/peralatan/Yoto 16LT.png",
  },
];

const listDataPestisida = [
  {
    id: 1,
    name: "Acrobat 10GR",
    price: "13.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pestisida/Acrobat 10GR.png",
  },
  {
    id: 2,
    name: "Raja Lele Rimba 1LT",
    price: "35.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pestisida/Raja Lele Rimba 1LT.png",
  },
  {
    id: 3,
    name: "Sirkus 1LT",
    price: "36.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pestisida/Sirkus 1LT.png",
  },
  {
    id: 4,
    name: "Spontan 1LT",
    price: "120.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pestisida/Spontan 1LT.png",
  },
  {
    id: 5,
    name: "Swan SA 14BIG",
    price: "70.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pestisida/Top Zone 1LT.png",
  },
  {
    id: 6,
    name: "Velimek 800GR",
    price: "130.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pestisida/Velimek 800GR.png",
  },
];

const listDataPupuk = [
  {
    id: 1,
    name: "Esta Kieser MAG Pupuk Kiesrite",
    price: "350.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pupuk/Esta Kieser MAG Pupuk Kiesrite.png",
  },
  {
    id: 2,
    name: "Karate Plus Boroni Pupuk Kalsium Nitrat",
    price: "350.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pupuk/Karate Plus Boroni Pupuk Kalsium Nitrat.png",
  },
  {
    id: 3,
    name: "Meroke Fitoflex Pupuk Mikro Majemuk",
    price: "360.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pupuk/Meroke Fitoflex Pupuk Mikro Majemuk.png",
  },
  {
    id: 4,
    name: "Meroke Kalnit Pupuk Kalsium Nitrat",
    price: "780.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pupuk/Meroke Kalnit Pupuk Kalsium Nitrat.png",
  },
  {
    id: 5,
    name: "Meroke MOP Pupuk KCL",
    price: "850.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pupuk/Meroke MOP Pupuk KCL.png",
  },
  {
    id: 6,
    name: "Mutiara Pupuk NPK 16-16-16.",
    price: "730.000",
    location: "Kota Cirebon",
    url: "/public/assets/img/pupuk/Mutiara Pupuk NPK 16-16-16.png",
  },
];

const showProductPupuk = () => {
  return listDataPupuk.map((item) => (
    <CardProduct
      key={item.id}
      location={item.location}
      name={item.name}
      price={item.price}
      imgUrl={item.url}
    />
  ));
};

const showProductPestisida = () => {
  return listDataPestisida.map((item) => (
    <CardProduct
      key={item.id}
      location={item.location}
      name={item.name}
      price={item.price}
      imgUrl={item.url}
    />
  ));
};

const showProductPeralatan = () => {
  return listDataPeralatan.map((item) => (
    <CardProduct
      key={item.id}
      location={item.location}
      name={item.name}
      price={item.price}
      imgUrl={item.url}
    />
  ));
};

const showProductPakan = () => {
  return listDataPakan.map((item) => (
    <CardProduct
      key={item.id}
      location={item.location}
      name={item.name}
      price={item.price}
      imgUrl={item.url}
    />
  ));
};

const showProductBenih = () => {
  return listDataBenih.map((item) => (
    <CardProduct
      key={item.id}
      location={item.location}
      name={item.name}
      price={item.price}
      imgUrl={item.url}
    />
  ));
};

const showProductNutrisi = () => {
  return listDataNutrisi.map((item) => (
    <CardProduct
      key={item.id}
      location={item.location}
      name={item.name}
      price={item.price}
      imgUrl={item.url}
    />
  ));
};

export default function Product() {
  return (
    <>
      <Page>
        <div className="myContainer">
          <SearchEngine />

          <CategoryProduct name="Kategori Pupuk" />
          <div className="w-full p-5 mt-2 flex overflow-x-auto flex-nowrap">
            {showProductPupuk()}
          </div>

          <CategoryProduct name="Kategori pestisida" />
          <div className="w-full p-5 mt-2 flex overflow-x-auto flex-nowrap">
            {showProductPestisida()}
          </div>

          <CategoryProduct name="Kategori Bibit / Benih" />
          <div className="w-full p-5 mt-2 flex overflow-x-auto flex-nowrap">
            {showProductBenih()}
          </div>

          <CategoryProduct name="Kategori Peralatan" />
          <div className="w-full p-5 mt-2 mb-10 flex overflow-x-auto flex-nowrap">
            {showProductPeralatan()}
          </div>

          <CategoryProduct name="Kategori Nutrisi" />
          <div className="w-full p-5 mt-2 flex overflow-x-auto flex-nowrap">
            {showProductNutrisi()}
          </div>

          <CategoryProduct name="Kategori Pakan" />
          <div className="w-full p-5 mt-2 flex overflow-x-auto flex-nowrap">
            {showProductPakan()}
          </div>
        </div>
      </Page>
    </>
  );
}
