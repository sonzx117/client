import React from "react";
import { Button, InputForm } from "../../components";

const Login = () => {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">Đăng Nhập</h3>
      <div className="w-full flex flex-col gap-3">
        <InputForm label={"SỐ ĐIỆN THOẠI"} />
        <InputForm label={"MẬT KHẨU"} />
        <Button
          text={"Đăng Nhập "}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWith
        />
      </div>
      <div className="mt-7 flex items-center justify-between ">
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Bạn quên mật khẩu
        </small>
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Tạo mật khẩu mới
        </small>
      </div>
    </div>
  );
};

export default Login;