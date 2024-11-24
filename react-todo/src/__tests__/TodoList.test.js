import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides additional matchers
import TodoList from "../components/TodoList"; // Adjust the path based on your project structure

describe("TodoList Component", () => {
  test("renders TodoList component correctly", () => {
    render(<TodoList />);
    // Check for main elements
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/add a todo/i)).toBeInTheDocument();
  });

  test("allows adding a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a todo/i);
    const addButton = screen.getByText(/add/i);

    // Simulate adding a todo
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    // Verify the new todo is added
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("allows toggling the completion status of a todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a todo/i);
    const addButton = screen.getByText(/add/i);

    // Add a new todo
    fireEvent.change(input, { target: { value: "Complete me" } });
    fireEvent.click(addButton);

    // Toggle completion status
    const todoItem = screen.getByText("Complete me");
    fireEvent.click(todoItem);

    // Verify the style change (e.g., line-through for completed todos)
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("allows deleting a todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a todo/i);
    const addButton = screen.getByText(/add/i);

    // Add a todo and delete it
    fireEvent.change(input, { target: { value: "Delete me" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);

    // Verify the todo is deleted
    expect(screen.queryByText("Delete me")).not.toBeInTheDocument();
  });
});
