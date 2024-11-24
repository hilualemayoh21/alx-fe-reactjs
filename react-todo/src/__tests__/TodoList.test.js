import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the initial list of todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    // Simulate user input and form submission
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    // Check that the new todo is added
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Toggle todo status
    fireEvent.click(todoItem);

    // Check that the todo is marked as completed
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Toggle again
    fireEvent.click(todoItem);

    // Check that the todo is marked as not completed
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const deleteButton = screen.getByText("Delete", { selector: "button" });

    // Delete the todo
    fireEvent.click(deleteButton);

    // Check that the todo is removed
    expect(todoItem).not.toBeInTheDocument();
  });
});
