import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("save a new comment", () => {
  it("has the correct action type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it("has the correct action payload", () => {
    const action = saveComment("New Comment for testing");
    expect(action.payload).toEqual("New Comment for testing");
  });
});
