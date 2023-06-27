import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Text from "./index";

const setup = ({ onChange, ...otherProps }) => {
  const utils = render(<Text onChange={onChange} {...otherProps} />);
  const wrapper = utils.container.querySelector(".input-text");
  const input = utils.container.querySelector("input");

  return {
    ...utils,
    wrapper,
    input,
  };
};

describe("Text component", () => {
  const mockOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without errors", () => {
    render(<Text name="text-input" value="" onChange={mockOnChange} />);
  });

  it("triggers onChange function when input value changes", () => {
    const { getByPlaceholderText } = render(
      <Text name="text-input" value="" onChange={mockOnChange} />
    );

    const input = getByPlaceholderText("Please type here...");
    fireEvent.change(input, { target: { value: "Test input" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith({
      target: {
        name: "text-input",
        value: "Test input",
      },
    });
  });

  it("displays error message for invalid email input", () => {
    const { getByPlaceholderText, getByText } = render(
      <Text name="email-input" value="" onChange={mockOnChange} type="email" />
    );

    const input = getByPlaceholderText("Please type here...");
    fireEvent.change(input, { target: { value: "invalid-email" } });

    const errorMessage = getByText("Please match the requested format.");
    expect(errorMessage).toBeInTheDocument();
  });

  it("does not display error message for valid email input", () => {
    const { getByPlaceholderText, queryByText } = render(
      <Text name="email-input" value="" onChange={mockOnChange} type="email" />
    );

    const input = getByPlaceholderText("Please type here...");
    fireEvent.change(input, { target: { value: "valid-email@example.com" } });

    const errorMessage = queryByText("Please match the requested format.");
    expect(errorMessage).toBeNull();
  });

  it("triggers onChange function for valid telephone input", () => {
    const { getByPlaceholderText } = render(
      <Text name="tel-input" value="" onChange={mockOnChange} type="tel" />
    );

    const input = getByPlaceholderText("Please type here...");
    fireEvent.change(input, { target: { value: "1234567890" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith({
      target: {
        name: "tel-input",
        value: "1234567890",
      },
    });
  });

  it("does not trigger onChange function for invalid telephone input", () => {
    const { getByPlaceholderText } = render(
      <Text name="tel-input-invalid" value="" onChange={mockOnChange} type="tel" />
    );

    const input = getByPlaceholderText("Please type here...");
    fireEvent.change(input, { target: { value: "invalid-telephone" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith({
      target: {
        name: "tel-input-invalid",
        value: "invalid-telephone",
      },
    });
  });
});
