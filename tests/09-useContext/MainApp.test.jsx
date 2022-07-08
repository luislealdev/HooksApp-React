import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Tests in <MainApp/>', () => { 
    test('should check the HomePage', () => { 
        render(
        <MemoryRouter>
        <MainApp/>
        </MemoryRouter>
        )
        expect(screen.getByText('HomePage')).toBeTruthy();
     });

     test('should check the LoginPage', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
            <MainApp/>
            </MemoryRouter>
            )
            expect(screen.getByText('LoginPage')).toBeTruthy();
      });

      test('should check the AboutPage', () => { 
        render(
            <MemoryRouter initialEntries={['/about']}>
            <MainApp/>
            </MemoryRouter>
            )
            expect(screen.getByText('AboutPage')).toBeTruthy();
      });

 })