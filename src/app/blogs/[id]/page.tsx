import Comments from "@/components/comments";
import FormComment from "@/components/formcomment";
import prisma from "@/lib/db";
import React, { FC } from "react";

interface BlogDetailProps {
  params: {
    id: string;
  };
}

const page: FC<BlogDetailProps> = async ({ params }) => {
  const posts = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
    include: {
      author: true,
    },
  });
  console.log(posts);
  return (
    <div className=" max-w-4xl mx-auto md:py-8 p-10">
      <h1 className=" text-3xl font-bold">{posts?.title}</h1>
      <p>Written by: {posts?.author?.name}</p>
      <div className="mt-4 text-justify leading-relaxed">{posts?.content}</div>
      <Comments postId={params.id} />
      <FormComment postId={params.id} />
    </div>
  );
};

export default page;
