import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {

    const [boxSize, setBoxSize] = useState({weight:0, height:0});

    const pRef = useRef();

    useLayoutEffect(() => {
        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({
            width, height
        });
    }, [])

  return (
    <>
      <blockquote className="blockquote text-end" style={{display:'flex'}}>
        <p className="mb-1" ref={pRef}>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>
        {JSON.stringify(boxSize)}
      </code>
    </>
  );
};
