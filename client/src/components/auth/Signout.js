import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../../actions";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return (
      <div>
        <h4>Thank you for using Redux Blog . See you again soon ....</h4>
      </div>
    );
  }
}

export default connect(
  null,
  { signout }
)(Signout);
