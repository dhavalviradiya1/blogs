import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BlogsCard from "@/components/blogCard";
import { setBlogsData } from "@/redux/blogsListSlice";

const Blogs = ({ listData }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBlogsData(listData));
  }, []);

  return (
    <>
      <div className="h-[100vh] mx-auto max-w-screen-xl px-4 py-2 overflow-auto">
        <div className="flex w-full justify-center items-center text-2xl">
          Blogs page
        </div>
        <BlogsCard />
      </div>
    </>
  );
};

export default Blogs;
