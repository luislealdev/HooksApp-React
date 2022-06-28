import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {

  console.log("cargao");

  return (
    <>
      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          increment(5);
        }}
      >
        +1
      </button>
    </>
  );
});
