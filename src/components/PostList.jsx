import React from "react";
import PostTwo from "./PostTwo";

function PostList(props) {
  // console.log("props List: ",props.postList);

  function returnPostKey(post) {
    console.log(post.text)
    // console.log(props);
  }

  return (
      <main>
        <h2>Post List</h2>

        {props.postList.map((post) =>
          <div style={{border: "1px solid red"}} key={post.id} onClick={returnPostKey}>
            <PostTwo
              text={post.text}
              votes={post.votes}
              onhandleVote={props.onhandleVote}
            />
          <button onClick={()=> props.onhandleVote(post, 'up')}>Up Vote</button>
            <button onClick={()=> props.onhandleVote(post, 'down')}>Down Vote</button>
          </div>
        )}

      </main>
  );
}


export default PostList;
