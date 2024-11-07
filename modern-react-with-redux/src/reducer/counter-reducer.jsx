import ACTION_TYPES from "../common-library/action-types";

const CounterReducer = (state, action) => {
  //   console.log(state, action);
  let { counter, valueToAdd } = state;
  const {
    INCREMENT_ACTION,
    DECREMENT_ACTION,
    RESET_ACTION,
    VALUE_TO_ADD_ACTION,
    ADD_VALUE_TO_COUNTER_ACTION
  } = ACTION_TYPES;

  if (action.type === INCREMENT_ACTION) {
    // console.log(action.type, INCREMENT_ACTION);
    return {
      ...state,
      counter: counter + 1
    };
  }
  if (action.type === DECREMENT_ACTION) {
    // console.log(action.type);
    return {
      ...state,
      counter: counter <= 0 ? 0 : counter - 1
    };
  }
  if (action.type === RESET_ACTION) {
    // console.log(action.type);
    return {
      ...state,
      counter: (counter = 0),
      valueToAdd: 0
    };
  }
  if (action.type === VALUE_TO_ADD_ACTION) {
    // console.log(action.type);
    return {
      ...state,
      valueToAdd: action.payload
    };
  }
  if (action.type === ADD_VALUE_TO_COUNTER_ACTION) {
    // console.log(action.type);
    return {
      ...state,
      counter: counter + valueToAdd,
      valueToAdd: 0
    };
  }

  return { ...state };

  //   switch (action.type) {
  //     case "increment-action":
  //       return {
  //         ...state,
  //         count: state.counter + 1
  //       };
  //     default:
  //   }
};

export default CounterReducer;
