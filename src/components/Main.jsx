import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleCreateNewPost = this.handleCreateNewPost.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  handleCreateNewPost(newPostObject) {
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPostObject);
    this.setState({masterPostList: newMasterPostList});
  }

  handleVote(postObject, direction) {
    let newPostObject = postObject;

    if(direction === 'up') {
      newPostObject.votes ++;
    } else if (direction === 'down') {
      newPostObject.votes --;
    }

    let postIndex = this.findPostIndex(postObject, this.state.masterPostList);

    let newPostList = this.updatePostArray(postIndex, newPostObject, this.state.masterPostList);

    let sortedPostList = [...newPostList].sort(function(a, b) { return b.votes - a.votes});

    this.setState({masterPostList: sortedPostList})
  }

  findPostIndex(post, array) {
    for(let i = 0; i <= array.length; i++) {
      if (post.id === array[i].id) {
        return i;
      }
    }
  }

  updatePostArray(postIndex, postObject, postArray) {
    let newPostArray = postArray.slice();
    newPostArray.splice(postIndex, 1, postObject);
    return newPostArray;
  }

  render() {
    return (
      <div className="container">
        <main>
          <h1>Super Reddit</h1>
          <NewPostForm
            onCreateNewPost = {this.handleCreateNewPost}
          />

          <PostList
            postList = {this.state.masterPostList}
            onVote={this.handleVote}
          />
        </main>
      </div>
    );
  }
}

export default Main;
