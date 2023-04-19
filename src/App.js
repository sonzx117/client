import { Routes, Route } from "react-router-dom";
import {
  DetailPost,
  Home,
  Homepage,
  Login,
  Rental,
  SearchDetail,
} from "./containers/Public";

import { path } from "./ultils/constant";
import { CreatePost, System } from "./containers/System";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../src/store/actions";
import { useEffect } from "react";
function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getCurrent());
    }, 1000);
  }, [isLoggedIn]);

  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={"*"} element={<Homepage />} />

          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<Rental />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental />} />
          <Route path={path.NHA_CHO_THUE} element={<Rental />} />
          <Route path={path.SEARCH} element={<SearchDetail />} />
          <Route
            path={path.DETAIL_POST_TITLE_POSTID}
            element={<DetailPost />}
          />
        </Route>
        <Route path={path.SYSTEM} element={<System />}>
          <Route path={path.CREATE_POST} element={<CreatePost />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
