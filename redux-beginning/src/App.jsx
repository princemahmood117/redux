import { useReducer } from "react";
// import Counter from "./components/Counter";
// import Stats from "./components/Stats";

// const initialCounters = [
//   {
//     id: 1,
//     value: 0,
//   },
//   {
//     id: 2,
//     value: 10,
//   },

// ];

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count,dispatch] = useReducer(reducer, initialState);  // dispatch -> কোন action এর উপর বেজ করে useReducer কাজ করবে 

 

  // const [counters, setCounters] = useState(initialCounters);

  // // to convert an array into a single value, we use reduce

  // const totalCount = counters.reduce((sum,current)=> sum+current.value,0 )

  // const handleIncrement = (counterId) => {

  //   const updatedCounters = counters.map(counter => {
  //     if(counter.id === counterId) {
  //       return {
  //         ...counter,
  //         value : counter.value + 1
  //       }
  //     }
  //     else {
  //       return counter
  //     }
  //   })
  //   setCounters(updatedCounters)
  // }

  // const handleDecrement = (counterId) => {
  //   const updatedCounters = counters.map(counter => {
  //     if(counter.id === counterId) {
  //       return {
  //         ...counter,
  //         value : counter.value - 1
  //       }
  //     }
  //     else {
  //       return counter
  //     }
  //   })
  //   setCounters(updatedCounters)
  // }

  return (
    // <div className="h-screen p-10 bg-gray-100 text-slate-700">
    //   <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
    //     Simple Counter application
    //   </h1>

    //   <div className="max-w-md mx-auto mt-10 space-y-5">
    //     {/* <Counter></Counter>
    //     <Counter></Counter> */}

    //     {
    //       counters.map(counter => <Counter key={counter.id} count={counter.value} onIncrement={()=> handleIncrement(counter.id)} onDecrement={()=> handleDecrement(counter.id)}></Counter>)
    //     }
    //     <Stats totalCount={totalCount}></Stats>
    //   </div>
    // </div>

    <div>
      <h1>Counter from app.jsx</h1>
      <div>Count - {count}</div>
      <button onClick={()=> dispatch('increment')} className="btn border p-2" type="button">
        Increment
      </button>
      <button onClick={()=> dispatch('decrement')} className="btn border p-2" type="button">
        Decrement
      </button>
    </div>
  );
}

export default App;
