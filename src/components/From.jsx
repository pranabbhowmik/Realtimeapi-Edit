import React, { useState } from 'react';
import { postData } from '../api/GetData';

export const From = ({ data, setData, fetchPosts }) => {
  const [adddata, setAdddata] = useState({
    "title": "",
    "body": ""
  });

  const handeldata = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAdddata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addPostData = async () => {
    try {
      const res = await postData(adddata);
      console.log('res', res);
      
      if (res.status === 200) {  
        setAdddata({ title: "", body: "" });
        fetchPosts();  // Refetch posts after adding a new post
      }
    } catch (error) {
      console.log('Error adding post:', error);
    }
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    addPostData();
  };

  return (
    <form className="flex justify-center items-center px-4 md:px-0" onSubmit={handelsubmit}>
      <div className="w-full md:w-[50rem] h-auto md:h-20 rounded-xl bg-slate-900 p-5 md:p-3 mx-4 md:mx-20 my-9 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          className="w-full md:w-[200px] h-[35px] bg-gray-300 text-black px-5 rounded-lg"
          placeholder="Add Title"
          value={adddata.title}
          onChange={handeldata} />

        <label htmlFor="body"></label>
        <input
          type="text"
          className="w-full md:w-[200px] h-[35px] bg-gray-300 text-black px-5 rounded-lg"
          autoComplete="off"
          placeholder="Add Post"
          id="body"
          name="body"
          value={adddata.body}
          onChange={handeldata} 
        />

        <button type="submit" className="w-20 md:w-28 h-14 rounded-2xl font-semibold bg-green-600">
          Submit
        </button>
      </div>
    </form>
  );
};
