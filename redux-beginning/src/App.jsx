// import {  useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Features/counters/CountersSlice";

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

function App() {
  // const [counters, setCounters] = useState(initialCounters);


  const counters = useSelector((state)=> state.counters )

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const dispatch = useDispatch()


  const handleIncrement = (counterId) => {
    dispatch(increment(counterId))
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId))
  };


  // const handleIncrement = (counterId) => {
  //   const updatedCounters = counters.map((counter) => {
  //     if (counter.id === counterId) {
  //       return {
  //         ...counter,
  //         value: counter.value + 1,
  //       };
  //     } else {
  //       return counter;
  //     }
  //   });
  //   setCounters(updatedCounters);
  // };

  // const handleDecrement = (counterId) => {
  //   const updatedCounters = counters.map((counter) => {
  //     if (counter.id === counterId) {
  //       return {
  //         ...counter,
  //         value: counter.value - 1,
  //       };
  //     } else {
  //       return counter;
  //     }
  //   });
  //   setCounters(updatedCounters);
  // };

  return (
    <div className="h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {/* <Counter></Counter>
        <Counter></Counter> */}

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          ></Counter>
        ))}
        <Stats totalCount={totalCount}></Stats>
      </div>
    </div>
  );
}

export default App;
