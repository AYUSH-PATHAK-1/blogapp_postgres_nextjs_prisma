// import { posts } from "@/data/posts";
import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

const page = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
    },
  });
  console.log(posts);
  return (
    <div className=" max-w-4xl mx-auto py-8 p-5 ">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {posts.map((post) => (
          <div
            className=" border border-gray-600 p-5 rounded-lg bg-purple-200 hover:ring hover:border-blue-400"
            key={post.id}>
            <Link href={`/blogs/${post.id}`}>
              <h2 className=" text-xl font-bold mb-4">{post.title}</h2>
              <p>Written By:{post.author?.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
