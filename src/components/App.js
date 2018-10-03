import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import * as actions from "actions";

class App extends Component {
  renderLoginButton() {
    return this.props.auth ? (
      <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
    ) : (
      <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
    );
  }
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{this.renderLoginButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route exact path="/post" component={CommentBox} />
        <Route path="/" component={CommentList} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  actions
)(App);
