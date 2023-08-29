import React from "react";
import ArrowIcon from "../../../public/icons/arrow";

const ReadMoreBtn = () => {
  return (
    <p className="flex items-center bg-white text-black text-lg py-2 px-6 rounded-lg cursor-pointer hover:scale-105 transition-all">
      <a href="#" className="mr-2">
        Read more
      </a>
      <ArrowIcon/>
    </p>
  );
};

export default ReadMoreBtn;
