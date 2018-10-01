import React from "react";
import { mount } from "enzyme"; //here we use fulldom test method
import CommentBox from "components/CommentBox";

let wrapped;

//Initialise the component
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

//unmount component from the virtual dom after test executed
afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

//group the test
describe("Text area testings ", () => {
  beforeEach(() => {
    //First find the text area and simulate the change event
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    //then force render the component
    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    //now check wether textarea got the correct value
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("clears the textarea when comment is submitted", () => {
    //simulate form submit event
    wrapped.find("form").simulate("submit");
    //then force render the component
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
