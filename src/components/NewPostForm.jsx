import React from "react";
import { v4 } from "uuid";
import Post from "./Post";
import PropTypes from "prop-types";

function NewPostForm(props){
  let _newPost = null;

  function handleNewPostFormSubmission(event) {
    console.log("Form Submitted!", props);
    event.preventDefault();
    let newPost = _newPost.value;
    props.firstRefToOriginalMethodInMain({text: newPost, id: v4()});
    _newPost.value = '';
  }

  return (
    <main>
      <h2>New Post</h2>
      <form onSubmit={handleNewPostFormSubmission}>

        <textarea id="newPost" placeholder="What's the story?" ref={(textarea) => {_newPost = textarea;}}/>

        <button type="submit">Add Post</button>
      </form>
    </main>
  );
}

NewPostForm.propTypes = {
  firstRefToOriginalMethodInMain: PropTypes.func
}

export default NewPostForm;
