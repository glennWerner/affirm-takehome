import { render, screen, fireEvent } from "@testing-library/react";
import CreditCardForm from "./CreditCardForm";

test("renders credit card form", () => {
  render(<CreditCardForm />);
  const formElement = screen.getByTestId("form-1");
  expect(formElement).toBeInTheDocument();
  expect(formElement).toHaveTextContent("Enter your credit card information");
});

describe("form input changes", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<CreditCardForm />);

    const inputName = queryByTitle("name-input");
    const inputNumber = queryByTitle("number-input");
    const inputCvv2 = queryByTitle("cvv2-input");
    const inputMonth = queryByTitle("month-input");
    const inputYear = queryByTitle("year-input");
    const formButton = queryByTitle("submit-button");
    const errorDiv = queryByTitle("error-div");

    fireEvent.change(inputName, { target: { value: "Test User" } });
    expect(inputName.value).toBe("Test User");

    fireEvent.change(inputNumber, { target: { value: 4222222222222222 } });
    expect(inputNumber.value).toBe("4222222222222222");

    fireEvent.change(inputCvv2, { target: { value: 222 } });
    expect(inputCvv2.value).toBe("222");

    fireEvent.change(inputMonth, { target: { value: 11 } });
    expect(inputMonth.value).toBe("11");

    fireEvent.change(inputYear, { target: { value: 2021 } });
    expect(inputYear.value).toBe("2021");

    fireEvent.click(formButton);
    expect(errorDiv).toBeFalsy();
  });
});
