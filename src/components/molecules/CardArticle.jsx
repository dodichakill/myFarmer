import React from "react";
import Button from "../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

export default function CardArticle({
  imgUrl = "/public/assets/img/imgArtikel.png",
  name,
  urlArticle = "#",
  date = "10/04/2023",
}) {
  return (
    <div className="flex border-b-2 border-slate-300 pb-3 mb-5">
      <div className="h-28 w-40">
        <img
          src={imgUrl}
          alt="ilustration"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full px-5">
        <p className="text-slate-600 text-lg font-semibold">{name}</p>
        <div className="text-slate-400 text-base">
          <FontAwesomeIcon icon={faCalendarDay} />{" "}
          <span className="mr-2">{date}</span>
        </div>
        <div className="mt-2">
          <Button url={urlArticle} type="etc">
            Lihat Selengkapnya
          </Button>
        </div>
      </div>
    </div>
  );
}
