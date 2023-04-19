import React from "react";

const SItem = ({ title, attributes, image }) => {
  return (
    <div className="w-full flex items-center gap-2 py-2 border-b border-gray-300">
      <img
        src={image[0]}
        alt="anh"
        className="w-[65px] h-[65px] object-cover flex-none rounded-md cursor-pointer"
      />

      <div className="w-full flex-auto flex flex-col justify-between gap-1">
        <h4 className="text-blue-600 text-[14px] cursor-pointer">{`${title?.slice(
          0,
          45
        )}...`}</h4>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium text-green-500">
            {attributes?.price}
          </span>
          <span className="text-sm text-gray-300">{attributes?.published}</span>
        </div>
      </div>
    </div>
  );
};

export default SItem;
