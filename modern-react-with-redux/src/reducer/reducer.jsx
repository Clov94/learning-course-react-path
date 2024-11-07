const AccordionReducer = (state, action) => {
  //   console.log(state, action);
  let currentExpandedIndex = state.expandedIndex;
  const nextIndex = action.payload;

  if (currentExpandedIndex === nextIndex) {
    return {
      ...state,
      expandedIndex: (currentExpandedIndex = -1)
    };
  } else {
    return {
      ...state,
      expandedIndex: nextIndex
    };
  }
};

export default AccordionReducer;
