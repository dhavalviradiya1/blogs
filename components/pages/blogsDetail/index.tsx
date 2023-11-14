import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { getBlogsDetail } from "@/apis";

const BlogsDetail = ({ id }: any) => {
  const [blogDetail, setBlogDetail] = useState<any>({});

  const hamdleBlogsDetail = async (id: any) => {
    const blogDetailData = await getBlogsDetail(id);
    setBlogDetail(blogDetailData);
  };

  useEffect(() => {
    hamdleBlogsDetail(id);
  }, [id]);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-2 h-[100vh]">
      <div className="flex w-full justify-center items-center text-2xl">
        Blogs Detail page
      </div>
      <div>
        {blogDetail && blogDetail !== undefined ? (
          <Card className="mt-6 w-full">
            <CardHeader color="blue-gray" className="relative h-full">
              {blogDetail?.yoast_head_json?.og_image && (
                <img
                  src={blogDetail?.yoast_head_json?.og_image[0]?.url}
                  alt="detail-image"
                  height={blogDetail?.yoast_head_json?.og_image[0]?.height}
                  width={blogDetail?.yoast_head_json?.og_image[0]?.width}
                />
              )}
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {blogDetail?.title?.rendered}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Author- <span>{blogDetail?.yoast_head_json?.author}</span>
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Publication Date-
                <span>
                  {blogDetail?.yoast_head_json?.article_published_time}
                </span>
              </Typography>
              <Typography>
                {blogDetail?.yoast_head_json?.description}
              </Typography>
            </CardBody>
          </Card>
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default BlogsDetail;
