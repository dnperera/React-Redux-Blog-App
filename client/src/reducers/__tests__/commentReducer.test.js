import commentReducer from "reducers/commentsReducer";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment From Reducer Test"
  };
  const newState = commentReducer([], action);

  expect(newState).toEqual(["New Comment From Reducer Test"]);
});

it("handles actions with unknown types", () => {
  const action = {
    type: "GGGGGGGGG",
    payload: "New Comment From Reducer Test"
  };
  const newState = commentReducer([], action);
  expect(newState).toEqual([]);
});
