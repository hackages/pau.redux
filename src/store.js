import { createStore } from "redux";

const initialState = {
  counter: 10,
};
function reducer(state = initialState, action) {
  return state;
}
export const store = createStore(reducer);
