import React from "react";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { pages } from "@/helper/common";

const Footer = () => {
  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(`${path}`, { scroll: false });
  };
  return (
    <>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-around px-4">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2023 Blogs
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {pages?.map((item, index) => {
            return (
              <li key={index}>
                <Typography
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                  onClick={() => handleRouter(item?.link)}
                >
                  {item?.name}
                </Typography>
              </li>
            );
          })}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
