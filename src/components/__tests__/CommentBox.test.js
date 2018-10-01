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

it('has a text area that users can type in',()=>{
  expect(wrapped.find("textarea").simulate('change',{
    target:{value:'new comment'}
  })
})