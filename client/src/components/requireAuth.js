import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
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
      //make sure to pass all the props from parent to child
      return <ChildComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => {
    console.log("in hoa token", state.auth);
    return {
      auth: state.auth.authenticated
    };
  };
  return connect(mapStateToProps)(ComposedComponent);
};
