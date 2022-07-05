import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"

describe('Tests in <MultipleCustomHooks/>', () => { 
    test('should check the title, the isLoading, and the disabled button', () => { 
        render(<MultipleCustomHooks/>);
        expect(screen.getByText('BreakingBad Quotes'));
        expect(screen.getByText('Loading...'));
        const button = screen.getByRole('button', {name:'Next quote'});

        expect(button.disabled).toBeTruthy();

     })
 })