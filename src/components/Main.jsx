import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.originalMethodInMain = this.originalMethodInMain.bind(this);
  }

  originalMethodInMain(newPostObject) {
    console.log("Adding new post run successfully with string: ", newPostObject.text);
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPostObject);
    this.setState({masterPostList: newMasterPostList});
  }


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
          />
        </main>
      </div>
    );
  }
}

export default Main;
