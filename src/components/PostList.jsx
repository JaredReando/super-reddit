import React from "react";
import Post from "./Post";

function PostList(props) {
  console.log("props List: ",props.postList);

  function returnPostKey() {
    console.log("function triggered")
    console.log(props);
  }

  return (
      <main>
        <h2>Post List</h2>

        {props.postList.map((post) =>
          <div>
            <h1 onClick={returnPostKey}>{post.id} </h1>
            <Post
              text={post.text}
              key={post.id}
              postId={post.id}
            />
          </div>
      )}

      </main>
  );
}


export default PostList;
