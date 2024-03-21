import React from "react";

function index({ posts }) {
  return (
    <div>
      <ul>
        {posts.map((ele) => (
          <li key={ele.id}>
            <strong>
              <a href={`/posts/${ele.id}`}>{ele.title}</a>
            </strong>
            &nbsp; - {ele.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(URL);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
