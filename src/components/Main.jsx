import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [],
      propTwo: "thing",
      propThree: "otherTHing"
    };
    this.originalMethodInMain = this.originalMethodInMain.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  originalMethodInMain(newPostObject) {
    // console.log("Adding new post run successfully with string: ", newPostObject.text);
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

    // console.log(this.state.masterPostList)
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

  // handleDownVote() {
  //   let newVote = this.state.votes - 1;
  //   this.setState({votes: newVote});
  //   console.log(this.state.votes);
  // }
  //
  // masterUpVote(postObject) {
  //   post
  // }

  render() {
    return (
      <div className="container">
        <main>
          <h1>Super Reddit</h1>
          <NewPostForm
            firstRefToOriginalMethodInMain = {this.originalMethodInMain}
          />

          <PostList
            postList = {this.state.masterPostList}
            onhandleVote={this.handleVote}
          />
        </main>
      </div>
    );
  }
}

export default Main;
