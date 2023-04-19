import React from "react";
import { useDispatch, useSelector } from "react-redux";
import anoavatar from "../assets/nonavatar.png";
const User = () => {
  const { currentData } = useSelector((state) => state.user);
  return (
    <div className="flex items-center gap-2">
      <img
        src={currentData?.avatar || anoavatar}
        alt="avatar"
        className="w-10 object-cover rounded-full h-10 border-2 shadow-md border-white"
      />
      <div className="flex flex-col">
        <span>
          Xin Chao, <span className="font-semibold">{currentData?.name}</span>
        </span>
        <span>
          Ma tai khoan:{" "}
          <span className="font-medium">{`${currentData?.id?.slice(
            0,
            8
          )}`}</span>
        </span>
      </div>
    </div>
  );
};

export default User;
