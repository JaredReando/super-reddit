import React from "react";
import PropTypes from "prop-types";

class PostTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.votes);
    return (
      <div>
        <h3>{this.props.text}</h3>
        <p>Vote Count: {this.props.votes}</p>

      </div>
    );
  }

}

export default PostTwo;
