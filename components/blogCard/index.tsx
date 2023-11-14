import CardTheme from "@/common/card";
import { blogsList } from "@/redux/blogsListSlice";
import React from "react";
import { useSelector } from "react-redux";

const BlogsCard = () => {
  const blogList = useSelector(blogsList);

  return (
    <div className="flex flex-wrap justify-center ">
      {blogList?.length !== 0 ? (
        blogList?.map((item: any) => {
          return (
            <div className="p-4 max-w-lg" key={item?.id}>
              <CardTheme cardData={item} />
            </div>
          );
        })
      ) : (
        <div>No record found</div>
      )}
    </div>
  );
};

export default BlogsCard;
