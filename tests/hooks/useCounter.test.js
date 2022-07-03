import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe("Tests in the useCounter hook", () => {
  test("should return the initial value of the hook (10)", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, reset, decrement } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
  });

  test("should return the value of the initial state (now i want it to start with 0 and it has to start the counter being 0)", () => {
    const { result } = renderHook(() => useCounter(0));
    const { counter, increment, reset, decrement } = result.current;

    expect(counter).toBe(0);
  });

  test("should check the increment function", () => {
    const { result } = renderHook(() => useCounter(0));
    const { increment } = result.current;

    act(() => {increment(); increment(2)});

    expect(result.current.counter).toBe(3)
  });

  test("should check the decrement function", () => {
    const { result } = renderHook(() => useCounter(3));
    const { decrement } = result.current;

    act(() => {decrement(); decrement(2)});

    expect(result.current.counter).toBe(0)
  });

  test("should check the decrement function", () => {
    const { result } = renderHook(() => useCounter(0));
    const { increment, reset } = result.current;

    act(() => {increment(); reset()});

    expect(result.current.counter).toBe(0)
  });
  
});
