import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Tests in <MultipleCustomHooks/>', () => { 

    const increment = jest.fn();

    useCounter.mockReturnValue({
        counter: 0,
        increment
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should check the title, the isLoading, and the disabled button', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        expect(screen.getByText('BreakingBad Quotes'));
        expect(screen.getByText('Loading...'));
        const button = screen.getByRole('button', {name:'Next quote'});

        expect(button.disabled).toBeTruthy();

     });

     test('should check that the useFetch function works, to do this we use mock', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Luis Leal', quote: 'Hello World'}],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Luis Leal')).toBeTruthy();
        expect(screen.getByText('Hello World')).toBeTruthy();
        
        const button = screen.getByRole('button', {name:'Next quote'});
        expect(button.disabled).toBeFalsy();
      });

      test('should check that the increment function has beed called when pressing the button', () => { 
        useFetch.mockReturnValue({
            data: [{author: 'Luis Leal', quote: 'Hello World'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        const button = screen.getByRole('button', {name:'Next quote'});
        fireEvent.click(button);

        expect(increment).toHaveBeenCalled();
       })
 })