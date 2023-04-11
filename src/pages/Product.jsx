import React from "react";
import Page from "../components/templates/page";
import SearchEngine from "../components/molecules/SearchEngine";
import CardProduct from "../components/molecules/CardProduct";
import CategoryProduct from "../components/molecules/CategoryProduct";

const showProductBibit = () => (
  <>
    <CardProduct
      key={1}
      location="Kota Tegal"
      name="Jagung Manis Master Sweet 250GR"
      price="60.000"
    />
    <CardProduct
      key={2}
      location="Kota Tegal"
      name="Jagung Manis Master Sweet 250GR"
      price="60.000"
    />
    <CardProduct
      key={3}
      location="Kota Tegal"
      name="Jagung Manis Master Sweet 250GR"
      price="60.000"
    />
    <CardProduct
      key={4}
      location="Kota Tegal"
      name="Jagung Manis Master Sweet 250GR"
      price="60.000"
    />
    <CardProduct
      key={5}
      location="Kota Tegal"
      name="Jagung Manis Master Sweet 250GR"
      price="60.000"
    />
    <CardProduct
      key={6}
      location="Kota Tegal"
      name="Jagung Manis Master Sweet 250GR"
      price="60.000"
    />
  </>
);

export default function Product() {
  return (
    <>
      <Page>
        <div className="myContainer">
          <SearchEngine />
          <CategoryProduct name="Kategori Bibit / Benih" />
          <div className="w-full p-5 mt-2 flex overflow-x-auto flex-nowrap">
            {showProductBibit()}
          </div>
          <CategoryProduct name="Kategori Nutrisi" />
          <div className="w-full p-5 mt-2 flex overflow-x-auto flex-nowrap">
            {showProductBibit()}
          </div>
          <CategoryProduct name="Kategori Pakan" />
          <div className="w-full p-5 mt-2 flex overflow-x-auto flex-nowrap">
            {showProductBibit()}
          </div>
          <CategoryProduct name="Kategori Petisida" />
          <div className="w-full p-5 mt-2 flex overflow-x-auto flex-nowrap">
            {showProductBibit()}
          </div>
          <CategoryProduct name="Kategori Peralatan" />
          <div className="w-full p-5 mt-2 mb-10 flex overflow-x-auto flex-nowrap">
            {showProductBibit()}
          </div>
        </div>
      </Page>
    </>
  );
}
