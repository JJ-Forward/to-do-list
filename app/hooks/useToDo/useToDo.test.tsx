import { act, renderHook } from "@testing-library/react";
import { useToDo } from "./useToDo";

describe("useToDo", () => {
  it("todo list array should be empty", () => {
    const { result } = renderHook(useToDo);
    expect(result.current.toDoList).toEqual([]);
  });

  it("should add todo item", () => {
    const { result } = renderHook(useToDo);
    const item = { name: "test", completed: false, hidden: false };

    act(() => {
      result.current.handleAddToDoItem(item);
    });

    expect(result.current.toDoList).toEqual([item]);
  });

  it("should remove todo item", () => {
    const { result } = renderHook(useToDo);
    const item = { name: "test", completed: false, hidden: false };

    act(() => {
      result.current.handleAddToDoItem(item);
    });

    act(() => {
      result.current.handleRemoveToDoItem(0);
    });

    expect(result.current.toDoList).toEqual([]);
  });

  it("should remove all todo items", () => {
    const { result } = renderHook(useToDo);
    const itemOne = { name: "test", completed: false, hidden: false };
    const itemTwo = { name: "test two", completed: false, hidden: false };

    act(() => {
      result.current.handleAddToDoItem(itemOne);
    });

    act(() => {
      result.current.handleAddToDoItem(itemTwo);
    });

    expect(result.current.toDoList).toEqual([itemOne, itemTwo]);

    act(() => {
      result.current.handleRemoveAllToDos();
    });

    expect(result.current.toDoList).toEqual([]);
  });

  it("should hide todo item", () => {
    const { result } = renderHook(useToDo);
    const item = { name: "test", completed: false, hidden: false };

    act(() => {
      result.current.handleAddToDoItem(item);
    });

    act(() => {
      result.current.handleHideToDoItem(0);
    });

    expect(result.current.toDoList).toEqual([{ ...item, hidden: true }]);
  });

  it("should show all todo items", () => {
    const { result } = renderHook(useToDo);
    const itemOne = { name: "test", completed: false, hidden: true };
    const itemTwo = { name: "test two", completed: false, hidden: true };

    act(() => {
      result.current.handleAddToDoItem(itemOne);
    });

    act(() => {
      result.current.handleAddToDoItem(itemTwo);
    });

    act(() => {
      result.current.handleShowAllToDos();
    });

    expect(result.current.toDoList).toEqual([
      { ...itemOne, hidden: false },
      { ...itemTwo, hidden: false },
    ]);
  });

  it("should complete todo item", () => {
    const { result } = renderHook(useToDo);
    const item = { name: "test", completed: false, hidden: false };

    act(() => {
      result.current.handleAddToDoItem(item);
    });

    act(() => {
      result.current.handleCompletedToDoItem(0);
    });

    expect(result.current.toDoList).toEqual([{ ...item, completed: true }]);
  });

  it("should submit todo item", () => {
    const { result } = renderHook(useToDo);
    const item = { name: "test", completed: false, hidden: false };

    act(() => {
      result.current.handleOnSubmit(item.name);
    });

    expect(result.current.toDoList).toEqual([item]);
  });
});
