import React, { useEffect } from "react";
import { SItem } from "./index";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
const RelatedPost = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(actions.getPostsLimit());
  }, []);
  return (
    <div className="w-full bg-white rounded-md py-4">
      <h3 className="font-semibold text-lg">Tin mới đăng</h3>

      <div className="w-full">
        {posts.map((item) => {
          return (
            <SItem
              key={item?.id}
              attributes={item?.attributes}
              image={JSON.parse(item?.images?.image)}
              title={item?.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPost;
