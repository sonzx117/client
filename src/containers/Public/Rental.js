import React, { useEffect, useState } from "react";
import { text } from "../../ultils/constant";
import { List, Pagination } from "./index";
import { ItemSidebar, Province, RelatedPost } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import toSlug from "../../ultils/comons";

const Rental = () => {
  const { categories, prices, areas } = useSelector((state) => state.app);
  const [categoryCurrent, setCategoryCurrent] = useState({});

  const [categoryCode, setCategoryCode] = useState("none");
  const location = useLocation();

  useEffect(() => {
    const category = categories?.find(
      (item) => `/${toSlug(item.value)}` === location.pathname
    );
    setCategoryCurrent(category);
    if (category) {
      setCategoryCode(category.code);
    }
  }, [location]);

  return (
    <div className=" w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold"> {categoryCurrent?.header}</h1>
        <p className="text-sm text-gray-700">{categoryCurrent?.subheader}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List categoryCode={categoryCode} />
          <Pagination />
        </div>

        <div className="w-[30%]  flex flex-col gap-4 justify-start items-center ">
          <ItemSidebar
            isDouble={true}
            type={"priceCode"}
            content={prices}
            title="Thuê theo giá"
          />
          <ItemSidebar
            isDouble={true}
            type={"areaCode"}
            content={areas}
            title="Thuê theo diện tích"
          />

          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default Rental;
