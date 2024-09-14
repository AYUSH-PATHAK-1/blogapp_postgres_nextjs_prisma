"use client";
import React, { ChangeEvent, useState } from "react";

const FormComment = () => {
  const [comment, setComment] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    console.log(comment);
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
          onClick={handleSubmit}
          className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md
         mt-2 disabled:bg-gray-400">
          Send
        </button>
      </div>
    </div>
  );
};

export default FormComment;
