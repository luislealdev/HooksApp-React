import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(
    (numIncrement) => {
    setCounter((value) => value + numIncrement);
  }, 
  [],
  );

  return (
    <>
      <h1>Callback Hook</h1>
      <hr />
      <h6>Counter: {counter}</h6>
      <ShowIncrement increment={increment} />
    </>
  );
};
