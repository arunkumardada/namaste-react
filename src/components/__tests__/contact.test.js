import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact US Component Page Test Case", () => {
  it("Should Load the contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should Load the button inside Contact component", () => {
    it(<Contact />);
    const button = screen.getByRole("button");

    // or const button = screen.getByText("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should Load the input name inside Contact component", () => {
    it(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should Load 2 input boxes on the Contact component", () => {
    it(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
