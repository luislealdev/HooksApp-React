import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Tests in todoReducer', () => { 

    const initialState = [{
        id:1,
        description: 'Bla',
        done: false
    }]

    test('should return the initial state', () => { 
        const result = todoReducer(initialState, {});
        expect(initialState).toBe(result);
     });

     test('should add a todo', () => { 

        const newTodo = {
            id:2,
            description: 'hey',
            done: false
        }

        const action = {
            type: '[TODO] add todo',
            payload: newTodo
        }

        const state = todoReducer(initialState, action);
        expect(state.length).toEqual(2)
        expect(state).toContain(newTodo);

      })

    test('should delete a todo', () => { 
        const state = todoReducer(initialState, {type:'[TODO] delete todo', payload:'1'});
        expect(state.length).toBe(0);
     });

     test('should test the toggle of the todo', () => { 
        
      })
 })