// //

// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [state, setState] = useState(0);
//   const [counter, setCounter] = useState(false);
//   let interval;

//   useEffect(() => {
//     interval = setInterval(() => {
//       if (counter) {
//         setState(state + 1);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [state, counter]);

//   const startFunction = () => {
//     setCounter(true);
//   };

//   const stopFunction = () => {
//     setCounter(false);
//   };
//   const resetFunction = () => {
//     setCounter(false);
//     setState(0);
//   };
//   return (
//     <div>
//       <h1> count : {state}</h1>
//       <button onClick={startFunction}>increase</button>
//       <button onClick={stopFunction}>Decrease</button>
//       <button onClick={resetFunction}>Decrease</button>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(new Date());
  const [status, setStatus] = useState(false);

  let intial;

  useEffect(() => {
    if (status) {
      intial = setInterval(() => {
        setCount(new Date());
      }, 1000);
    }

    return () => clearInterval(intial);
  }, [status, count]);

  const increasedData = () => {
    setStatus(true);
  };
  const decreaseData = () => {
    setStatus(false);
  };
  const resetData = () => {
    setCount(0);
    setStatus(false);
  };

  return (
    <div>
      <h1>counter :{count.toLocaleTimeString()}</h1>
      <button onClick={increasedData}>increase</button>
      <button onClick={decreaseData}>Decrease</button>
      <button onClick={resetData}>Reset</button>
    </div>
  );
}
