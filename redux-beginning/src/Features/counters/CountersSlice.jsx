import { createSlice } from "@reduxjs/toolkit";

const initialSate = [
    {
      id: 1,
      value: 6,
    },
    {
      id: 2,
      value: 10,
    },
  
  ];

const countersSlice = createSlice( {
    name : 'counters',
    initialState : initialSate,
    reducers : { 
        increment : (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload)

            state[counterIndex].value++
        },

        decrement : (state, action) => {
            const countIndex = state.findIndex(c => c.id === action.payload)

            state[countIndex].value--
        }
        
    }
})

export default countersSlice.reducer;
export const {increment,decrement} = countersSlice.actions   // exporting the Actions


// createSlice সব reducers কে কমবাইন করে একটা reducer এ কনভার্ট করবে