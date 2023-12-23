import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { optionsArray } from "./components/checkbox/optionsArray";

test("Select All checkbox checked -> Check all other checkboxes", () => {
  const { getByLabelText } = render(<App />);

  const selectAllCheckbox = getByLabelText("Select All") as HTMLInputElement;
  const checkboxes = optionsArray.map(
    (option) => getByLabelText(option.label) as HTMLInputElement
  );

  fireEvent.click(selectAllCheckbox);

  expect(selectAllCheckbox.checked).toBe(true);
  checkboxes.forEach((checkbox) => {
    expect(checkbox.checked).toBe(true);
  });
});

test("All other checkboxes checked -> Check Select All checkbox", () => {
  const { getByLabelText } = render(<App />);

  const selectAllCheckbox = getByLabelText("Select All") as HTMLInputElement;
  const checkboxes = optionsArray.map(
    (option, index) => getByLabelText(option.label) as HTMLInputElement
  );

  checkboxes.forEach((checkbox) => {
    fireEvent.click(checkbox);
  });

  expect(selectAllCheckbox.checked).toBe(true);
});

test("All other checkboxes not checked -> Uncheck Select All checkbox", () => {
  const { getByLabelText } = render(<App />);

  const selectAllCheckbox = getByLabelText("Select All") as HTMLInputElement;

  expect(selectAllCheckbox.checked).toBe(false);
});

test("Any other checkbox not checked -> Uncheck Select All checkbox", () => {
  const { getByLabelText } = render(<App />);

  const selectAllCheckbox = getByLabelText("Select All") as HTMLInputElement;
  const checkboxes = optionsArray.map(
    (option, index) => getByLabelText(option.label) as HTMLInputElement
  );

  fireEvent.click(checkboxes[0]);

  expect(selectAllCheckbox.checked).toBe(false);
});
