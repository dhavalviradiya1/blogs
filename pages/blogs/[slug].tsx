import React from "react";
import BlogsDetail from "@/components/pages/blogsDetail";
import { useRouter } from "next/router";

const BlogsItem = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <BlogsDetail id={slug} />;
};

export default BlogsItem;
