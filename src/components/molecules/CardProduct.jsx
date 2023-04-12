import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function CardProduct({
  imgUrl = "/assets/img/pupuk/Esta Kieser MAG Pupuk Kiesrite.png",
  name = "nama produk",
  price = 0,
  location = "kota tegal",
}) {
  return (
    <div className="card w-64 bg-white shadow-xl flex-shrink-0 mr-4">
      <figure className="h-56">
        <img src={imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-slate-600">
          <Link to="/detail-product"> {name} </Link>
        </h2>
        <p className="font-bold text-xl text-black">Rp {price}</p>
        <p className="text-xl text-green-500">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="ml-2">{location}</span>
        </p>
      </div>
    </div>
  );
}
