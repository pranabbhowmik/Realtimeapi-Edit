import React from "react";

const Cards = ({ curElm }) => {
  console.log(curElm)

  return (
    <>
      <div className="w-full min-h-screen bg-slate-800">
        <div className="flex justify-center items-center px-4 md:px-0">
          <div className="w-full md:w-[35rem] h-auto md:h-20 rounded-xl bg-slate-900 p-5 md:p-3 mx-4 md:mx-20 my-9 space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row">
            {/* Display title in the input */}
            <input
              type="text"
              className="w-full md:w-[200px] h-[40px] bg-gray-300 text-black px-5 rounded-lg"
              value={title}
              readOnly
            />
            {/* Display body in the input */}
            <input
              type="text"
              className="w-full md:w-[200px] h-[40px] bg-gray-300 text-black px-5 rounded-lg"
              value={body}
              readOnly
            />
            <button className="w-full md:w-20 h-9 rounded-2xl font-semibold bg-green-600">
              Add
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-80 md:w-80 h-52 bg-slate-900 space-y-2 text-white rounded-lg p-4">
            {/* Display id, title, and body */}
            <p>{id}.</p>
            <p>{title}</p>
            <p>{body}</p>
            <div className="space-x-6 top-5">
              <button className="w-20 h-10 mt-9 bg-green-600 rounded-lg">Edit</button>
              <button className="w-20 h-10 bg-red-600 rounded-lg">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
