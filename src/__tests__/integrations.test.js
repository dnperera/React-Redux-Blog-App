import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments/", {
    status: 200,
    response: [
      { name: "Comment #1" },
      { name: "Comment #2" },
      { name: "Comment #3" }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display tem", done => {
  //attempt to Render the enire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //Find the 'fetch comments' button and simulate click
  wrapped.find(".fetch-comments").simulate("click");

  //Add some delay to next steps because Moxios take bit time to reply for the axios request
  moxios.wait(() => {
    //force update the dom
    wrapped.update();
    //Expect to find a list of comments
    expect(wrapped.find("li").length).toEqual(3);
    //tell JEST to complete the test by calling done
    done();
    wrapped.unmount();
  });
});
