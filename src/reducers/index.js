const INITIAL_STATE = {
  counter: 0
}

// Reducer
export function counterApp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENTAR":
      return { counter: state.counter + 1 };
    case "DECREMENTAR":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
} 