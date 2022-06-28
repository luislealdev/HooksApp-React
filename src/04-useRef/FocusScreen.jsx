import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const focusButton = (e) => {
        inputRef.current.select();
    }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={focusButton}>Focus</button>
    </>
  );
};
