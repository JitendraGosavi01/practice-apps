import React from "react";

function Post({ post }) {
  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}

export default Post;

export async function getServerSideProps(context) {
  const { postId } = context.query;
  const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  const res = await fetch(URL);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
