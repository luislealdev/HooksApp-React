import { render, screen } from "@testing-library/react";
import { TodosApp } from "../../src/08-useReducer/TodosApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("tests in <TodosApp/> ", () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        todo: "Todo #1",
        done: false,
      },
      {
        id: 2,
        todo: "Todo #2",
        done: true,
      },
    ],
    pending: 1,
    complete: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test("should check the two todos", () => {
    render(<TodosApp />);

    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
