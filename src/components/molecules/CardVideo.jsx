import React from "react";
import Button from "../atoms/Button";

export default function CardVideo({
  imgUrl = "/assets/img/imgVideo.png",
  name = "",
  urlVideo = "#",
}) {
  return (
    <div className="w-56 rounded-t-2xl flex-shrink-0">
      <img
        src={imgUrl}
        alt="ilustration"
        className="w-full h-32 object-cover rounded-t-2xl"
      />
      <div className="px-5 pt-2 pb-4 bg-white flex-col rounded-b-2xl">
        <p className="text-slate-600 font-semibold">{name}</p>
        <div className="mt-2">
          <Button url={urlVideo} type="etc">
            Lihat Selengkapnya
          </Button>
        </div>
      </div>
    </div>
  );
}
