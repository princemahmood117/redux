import { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    
    case "increment":
      return { ...state,counter: state.counter + action.value };
    case "decrement":
      return { ...state,counter: state.counter - action.value };

    case "increment2":
      return { ...state,counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };
    default:
      return state ;
  }
};

function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter from complexCounter.jsx</h1>
      <div>Count - {count.counter}</div>
      <div>Count - {count.counter2}</div>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            value: 1,
          })
        }
        className="btn border p-2"
        type="button"
      >
        Increment by 1
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            value: 1,
          })
        }
        className="btn border p-2"
        type="button"
      >
        Decrement by 1
      </button>


      <button
        onClick={() =>
          dispatch({
            type: "increment2",
            value: 2,
          })
        }
        className="btn border p-2"
        type="button"
      >
        Increment by 2
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "decrement2",
            value: 2,
          })
        }
        className="btn border p-2"
        type="button"
      >
        Decrement by 2
      </button>


      
    </div>
  );
}

export default ComplexCounter;
