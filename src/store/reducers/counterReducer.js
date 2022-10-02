import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../actionTypes';

const initialState = {
  count: 0
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, count: state.count + action.payload };
    case COUNTER_DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}
