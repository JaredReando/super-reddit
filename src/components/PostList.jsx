import React from "react";
import Post from "./Post";

function PostList(props) {
  console.log("props List: ",props.postList);
  return (
      <main>
        <h2>Post List</h2>
        {props.postList.map((post) =>
          <Post
            text={post.text}
            key={post.id}
          />
      )}
      </main>
  );
}


export default PostList;
