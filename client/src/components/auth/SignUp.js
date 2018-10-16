import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { signup } from "../../actions";

class SignUp extends Component {
  onSubmit = formProps => {
    console.log(formProps);
    //create the action creator with formdata and pass a //callback to redirect to a next page once authenticated
    this.props.signup(formProps, () => {
      this.props.history.push("/feature");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label htmlFor="email">Email :</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password :</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div className="error">{this.props.errorMessage}</div>
        <button>Sign Up!</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};
export default compose(
  connect(
    mapStateToProps,
    { signup }
  ),
  reduxForm({ form: "signup" })
)(SignUp);
