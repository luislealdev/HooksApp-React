import { renderHook } from "@testing-library/react";
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
});
