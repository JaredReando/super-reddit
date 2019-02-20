import React from "react";
import PostTwo from "./PostTwo";

function PostList(props) {

  return (
      <main>
        <h2>Post List</h2>

        {props.postList.map((post) =>
          <div style={{border: "1px solid red"}} key={post.id}>

            <PostTwo
              text={post.text}
              votes={post.votes}
              onVote={props.onVote}
            />

            <button onClick={()=> props.onVote(post, 'up')}>Up Vote</button>

            <button onClick={()=> props.onVote(post, 'down')}>Down Vote</button>
          </div>
        )}

      </main>
  );
}


export default PostList;
