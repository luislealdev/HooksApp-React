import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Tests in <LoginPage/>', () => { 

    const user = null;

    test('should show the null when user is not defined', () => { 

        render(
            <UserContext.Provider value={{ user }}>
              <LoginPage />
            </UserContext.Provider>
          );

          const pre = screen.getByLabelText("pre");
          expect(pre.innerHTML).toBe("null");
     });

     test('should check the function setUser is called with the user', () => { 
        const setUser = jest.fn();

        render(
            <UserContext.Provider value={{ user,setUser }}>
              <LoginPage />
            </UserContext.Provider>
          );


          const button = screen.getByRole('button');
          fireEvent.click(button);
        expect(setUser).toHaveBeenCalledWith({ id: 123, name: 'Juan', email: 'juan@google.com' });
         


      });
 });