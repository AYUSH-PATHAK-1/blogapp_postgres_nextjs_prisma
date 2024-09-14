import React from "react";

const Comments = () => {
  return (
    <div className=" mt-8">
      <h2 className=" text-2xl font-bold">Comments</h2>
      <ul>
        <li className=" mb-4 bg-purple-200 p-2 px-4 rounded-xl">
          <div className=" flex justify-between items-center mb-2">
            <div className=" text-blue-400 text-lg font-bold mr-2">john</div>
            <div className=" text-gray-400">10-Nov-2001</div>
          </div>
          <p>Wow Asweom</p>
        </li>
      </ul>
    </div>
  );
};

export default Comments;
