import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

import toSlug from "../../ultils/comons";

const Active =
  "hover:bg-secondary2 bg-secondary2 h-full flex items-center px-4";
const notActive =
  "hover:bg-secondary2  bg-secondary1 h-full flex items-center px-4";

const Navigation = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(actions.getCategories());
  }, []);
  return (
    <div className="w-screen flex justify-center items-center h-[40px] text-white bg-secondary1">
      <div className="w-3/5 flex h-full items-center text-sm font-medium">
        <div className="h-full flex items-center justify-center">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? Active : notActive)}
          >
            Trang chủ
          </NavLink>
        </div>

        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div
                key={item.code}
                className="h-full flex items-center justify-center"
              >
                <NavLink
                  to={`${toSlug(item.value)}`}
                  className={({ isActive }) => (isActive ? Active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
