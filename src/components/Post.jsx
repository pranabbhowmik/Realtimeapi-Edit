import { deletePost, getpost } from "../api/GetData";
import { useEffect, useState } from "react";
import React from "react";
import "../App.css";
import { From } from "./From";

export const Post = () => {
  const [data, setData] = useState([]);

  const getpostData = async () => {
    try {
      const res = await getpost();
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpostData();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const updatePost = data.filter((curPost) => curPost.id !== id);
        setData(updatePost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        {/* Pass fetchPosts to refetch posts when new data is added */}
        <From data={data} setData={setData} fetchPosts={getpostData} />
      </section>
      <section className="section-post p-3 mx-8 sm:p-10 sm:mx-32">
        <ol>
          {data.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li key={id} className="space-y-3">
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <div className="space-x-5">
                  <button className="w-28 h-10 mt-9 bg-green-600 rounded-lg">
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDeletePost(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
