import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  type = "primary",
  children,
  url,
  customStyle,
}) {
  return type == "primary" ? (
    <Link
      to={url}
      className={
        `btn rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 hover:border-green-300 capitalize shadow-md border-2 border-green-200 shadow-green-500 ` +
        customStyle
      }
    >
      {children}
    </Link>
  ) : (
    <Link
      to={url}
      className="btn rounded-lg font-bold text-green-700 bg-green-100 hover:bg-green-200 capitalize shadow-md shadow-green-500"
    >
      {children}
    </Link>
  );
}
