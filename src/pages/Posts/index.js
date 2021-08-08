import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import api from "../../services/api";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const response = await api.get("/posts");

    setPosts(response.data);
  }, []);

  return (
    <>
      <Header title="Posts" />

      <main>
        {posts.map((post) => (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </main>
    </>
  );
}
