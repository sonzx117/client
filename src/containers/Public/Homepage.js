import React, { useEffect } from "react";
import { text } from "../../ultils/constant";
import { List, Pagination } from "./index";
import { ItemSidebar, Province } from "../../components";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

const Homepage = () => {
  const [params] = useSearchParams();

  const { categories, prices, areas } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);

  return (
    <div className=" w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold"> {text.HOME_TITLE}</h1>
        <p className="text-sm text-gray-700">{text.HOME_DESCRIPTIONS}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
          <Pagination page={params.get("page")} />
        </div>

        <div className="w-[30%] border border-green-500 flex flex-col gap-4 justify-start items-center ">
          <ItemSidebar content={categories} title="Danh sách cho thuê" />
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
        </div>
      </div>
    </div>
  );
};

export default Homepage;
