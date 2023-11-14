import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const CardTheme = ({ cardData }: any) => {
  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(`${path}`, { scroll: false });
  };
  return (
    <>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {cardData?.title?.rendered}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Author- <span>{cardData?.yoast_head_json?.author}</span>
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Publication Date-
            <span>{cardData?.yoast_head_json?.article_published_time}</span>
          </Typography>
          <Typography>{cardData?.yoast_head_json?.description}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={() => handleRouter(`blogs/${cardData?.id}`)}>
            Read More
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardTheme;
