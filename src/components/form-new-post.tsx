"use client";
import { useRouter } from "next/navigation";
import { FormData } from "@/types/blog";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

const inputclass =
  "w-full py-2 px-3 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-200";

const Formnewpost = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const { data } = useSession();
  //   console.log(data?.user);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const Router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/posts", formData);
      // console.log(response.data.id);

      if (response.status === 201) {
        Router.push(`/blogs/${response.data.id}`);
        // console.log("hello");
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(formData);
  };

  return (
    <form className=" max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className=" mb-4">
        <input
          type="text"
          className={inputclass}
          placeholder="Enter the title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className=" mb-4">
        <ReactTextareaAutosize
          minRows={5}
          name="content"
          className={inputclass}
          placeholder="Enter your content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <button
        disabled={!data}
        type="submit"
        className=" bg-green-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-400 w-full disabled:bg-gray-400">
        Submit
      </button>
    </form>
  );
};

export default Formnewpost;
