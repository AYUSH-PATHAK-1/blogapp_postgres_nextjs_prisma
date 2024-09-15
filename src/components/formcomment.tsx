"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormcommetProps {
  postId: string;
}

const FormComment: FC<FormcommetProps> = ({ postId }) => {
  const [comment, setComment] = useState<string>("");
  const Router = useRouter();
  const { data } = useSession();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    // console.log(comment);
    if (comment.trim() !== "") {
      try {
        const newComment = await axios.post("/api/comments", {
          postId,
          text: comment,
        });
        if (newComment.status === 200) {
          Router.refresh();
          setComment("");
          toast("Posted 🤝");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast("Please Fill the Field 🔭");
    }
  };
  return (
    <div>
      <div className=" mt-4">
        <label className=" block text-gray-600 text-sm font-bold mb-2">
          Add Comment
        </label>
        <input
          value={comment}
          onChange={handleChange}
          type="text"
          className="w-full py-2 px-3 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-200"
          name="comment"
        />
        <button
          disabled={!data}
          onClick={handleSubmit}
          className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md
         mt-2 disabled:bg-gray-400">
          Send
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default FormComment;
