import React, { useEffect, useState } from "react";
import { Button, InputForm } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";

import * as actions from "../../store/actions";

import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [invalidFeilds, setInvalidfeilds] = useState([]);

  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    password: "",
  });
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  useEffect(() => {
    Swal.fire("Oops !", msg, "error");
  }, [msg, update]);

  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };

    let invalids = validate(finalPayload);
    if (invalids === 0)
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));
  };

  const validate = (payload) => {
    let invalids = 0;
    let feilds = Object.entries(payload);

    feilds.forEach((item) => {
      if (item[1] === "") {
        setInvalidfeilds((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn không thể để trống trường này",
          },
        ]);
        invalids++;
      }
    });
    feilds.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidfeilds((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu phải có tối thiểu 6 ký tự",
              },
            ]);
            invalids++;
          }
          break;
        case "phone":
          if (!+item[1]) {
            setInvalidfeilds((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Số điện thoại không hợp lệ",
              },
            ]);
            invalids++;
          }
          break;
        default:
          break;
      }
    });
    return invalids;
  };
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? "Tạo tài khoản mới" : "Đăng Nhập"}
      </h3>
      <div className="w-full flex flex-col gap-3">
        {isRegister && (
          <InputForm
            setInvalidfeilds={setInvalidfeilds}
            invalidFeilds={invalidFeilds}
            label={"HỌ VÀ TÊN"}
            value={payload.name}
            setValue={setPayload}
            keyPayload={"name"}
          />
        )}
        <InputForm
          setInvalidfeilds={setInvalidfeilds}
          invalidFeilds={invalidFeilds}
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          setValue={setPayload}
          keyPayload={"phone"}
        />
        <InputForm
          setInvalidfeilds={setInvalidfeilds}
          invalidFeilds={invalidFeilds}
          label={"MẬT KHẨU"}
          value={payload.password}
          setValue={setPayload}
          keyPayload={"password"}
          type="password"
        />
        <Button
          text={isRegister ? "Đăng kí" : "Đăng nhập"}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWith
          onClick={handleSubmit}
        />
      </div>
      <div className="mt-7 flex items-center justify-between ">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản ?{" "}
            <span
              onClick={() => {
                setIsRegister(false);
                setPayload({
                  name: "",
                  phone: "",
                  password: "",
                });
              }}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu
            </small>
            <small
              onClick={() => {
                setIsRegister(true);
                setPayload({
                  name: "",
                  phone: "",
                  password: "",
                });
              }}
              className="text-[blue] hover:text-[red] cursor-pointer"
            >
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
