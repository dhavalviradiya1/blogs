import React from "react";
import { getBlogsList } from "@/apis";
import Blogs from "@/components/pages/blogs";

const index = ({ data }: any) => {
  return <Blogs listData={data} />;
};

export default index;

export async function getServerSideProps() {
  // Fetching data
  const data = await getBlogsList();
  // Passing data to the Product Page using props
  return {
    props: { data },
  };
}
