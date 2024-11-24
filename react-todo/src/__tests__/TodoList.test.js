import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // For better DOM assertions
import TodoList from "../components/TodoList"; // Adjust the path if necessary

test("renders TodoList component with initial elements", () => {
  render(<TodoList />);
  expect(screen.getByText(/todo list/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/add a todo/i)).toBeInTheDocument();
});

test("allows adding a new todo", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByText(/add/i);

  // Add a new todo
  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  // Check if the new todo is in the document
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("allows toggling the completion of a todo", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByText(/add/i);

  // Add a new todo
  fireEvent.change(input, { target: { value: "Complete me" } });
  fireEvent.click(addButton);

  // Toggle the todo
  const todoItem = screen.getByText("Complete me");
  fireEvent.click(todoItem);

  // Verify that it is marked as completed (line-through style)
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("allows deleting a todo", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByText(/add/i);

  // Add a new todo
  fireEvent.change(input, { target: { value: "Delete me" } });
  fireEvent.click(addButton);

  // Delete the todo
  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);

  // Verify that the todo is no longer in the document
  expect(screen.queryByText("Delete me")).not.toBeInTheDocument();
});
