import React from "react";
import PropTypes from "prop-types";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0
    }
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleUpVote() {
    let newVote = this.state.votes + 1;
    this.setState({votes: newVote});
    console.log(this.state.votes);
  }

  handleDownVote() {
    let newVote = this.state.votes - 1;
    this.setState({votes: newVote});
    console.log(this.state.votes);
  }

  render() {
    return (
      <div>
        <h3>{this.props.text}</h3>
        <p>Vote Count: {this.state.votes}</p>
        <button onClick={this.handleUpVote}>Up Vote</button>
        <button onClick={this.handleDownVote}>Down Vote</button>
      </div>
    );
  }
}


export default Post;
