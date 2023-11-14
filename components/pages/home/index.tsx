import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@material-tailwind/react";

const Home = () => {
  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(`${path}`, { scroll: false });
  };
  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <div className="flex w-full justify-center items-center text-2xl">
          Welcome to blogs
        </div>
        <Button onClick={() => handleRouter("/blogs")}>Blogs</Button>
      </div>
    </>
  );
};

export default Home;
