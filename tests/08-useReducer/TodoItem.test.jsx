import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Tests in <TodoItem/>', () => { 

    const todo = {
        id:1,
        description: 'bla',
        done: false
    }

    beforeEach(() => {
        jest.clearAllMocks();
    })

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    test('should check the todo with done false', () => { 
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between mt-3');
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');

     });

     test('should check the todo with done true', () => { 
        todo.done = true;

        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);

        // const liElement = screen.getByRole('listitem');
        // expect(liElement.className).toBe('list-group-item d-flex justify-content-between mt-3');
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

     });

     test('span should call the onToggle todo when click', () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
      });

    test('button should call the onDelete todo when click', () => { 
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
     })

 })