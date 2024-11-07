import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import CounterReducer from "../reducer/counter-reducer";
import ACTION_TYPES from '../common-library/action-types'

function CounterPage({ initialValue }) {
  //   const [counter, setCounter] = useState(initialValue);
  //   const [valueToAdd, setValueToAdd] = useState(0);

  const {
    INCREMENT_ACTION,
    DECREMENT_ACTION,
    RESET_ACTION,
    VALUE_TO_ADD_ACTION,
    ADD_VALUE_TO_COUNTER_ACTION
  } = ACTION_TYPES;

  const [state, dispatch] = useReducer(CounterReducer, {
    counter: initialValue,
    valueToAdd: 0
  });
  console.log(state);

  const handleIncrementAction = () => {
    // setCounter(counter + 1);
    dispatch({ type: INCREMENT_ACTION });
  };

  const handleResetAction = () => {
    // setCounter(0);
    dispatch({ type: RESET_ACTION });
  };
  const handleDecrementAction = () => {
    dispatch({ type: DECREMENT_ACTION });
    // if (counter <= 0) {
    //   setCounter(0);
    // } else {
    //   setCounter(counter - 1);
    // }
  };

  const handleAddNumberAction = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    dispatch({ type: VALUE_TO_ADD_ACTION, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCounter(counter + valueToAdd);
    // setValueToAdd(0);
    dispatch({type: ADD_VALUE_TO_COUNTER_ACTION});
  };

  return (
    <Panel className={`m-3`}>
      <h1>Counter Page</h1>
      <Button success rounded onClick={handleIncrementAction}>
        INCREMENT
      </Button>
      <Button danger outline rounded onClick={handleDecrementAction}>
        DECREMENT
      </Button>
      <Button warning rounded onClick={handleResetAction}>
        RESET
      </Button>
      <div>Count is: {state.counter}</div>

      <form onSubmit={handleSubmit}>
        <label>Add Number</label>
        <input
            value={state.valueToAdd || ''}
          onChange={handleAddNumberAction}
          type="number"
          className="p-1 m-3 border border-gray-600"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
