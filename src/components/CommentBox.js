import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({
      comment: ""
    });
  };

  //active immediately component mount
  componentDidMount() {
    this.isUserLoggedIn();
  }
  //active immediately when component did update
  componentDidUpdate() {
    this.isUserLoggedIn();
  }

  isUserLoggedIn() {
    if (!this.props.auth) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button style={{ padding: "5px", margin: "10px" }}>Submit</button>
          </div>
        </form>
        <button
          className="fetch-comments"
          style={{ padding: "10px", margin: "10px" }}
          onClick={this.props.fetchComments}
        >
          Fetch Comments
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  actions
)(CommentBox);
