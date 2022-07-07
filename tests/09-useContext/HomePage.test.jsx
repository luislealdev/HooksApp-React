import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe("Tests in <HomePage/> using useContext", () => {
  test("should show the pre message (null) when the user is not defined", () => {
    const user = null;

    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const pre = screen.getByLabelText("pre");
    expect(pre.innerHTML).toBe("null");
  });

  test("should show the user when it is defined", () => {

    const user = {
        id:1,
        name:'Luis'
    };

    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const screenUser = screen.getByLabelText("pre");
    expect(screenUser.innerHTML).toContain(user.name);
    expect(screenUser.innerHTML).toContain(user.id.toString());
  });
});
