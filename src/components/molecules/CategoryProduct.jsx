import React from "react";
import { Link } from "react-router-dom";

export default function CategoryProduct({ name, url = "#" }) {
  return (
    <div className="flex justify-between mt-10">
      <h3 className="font-bold text-lg text-green-600">{name}</h3>
      <Link to={url} className="text-green-500">
        Lihat Selengkapnya...
      </Link>
    </div>
  );
}
