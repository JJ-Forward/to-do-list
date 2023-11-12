import { render, screen } from "@testing-library/react";
import ToDoItem from "./ToDoItem";

describe("ToDoItem", () => {
  it("is truthy", () => {
    expect(ToDoItem).toBeTruthy();
  });

  it("displays the correct UI in initial state", () => {
    const { container, queryByAltText } = render(
      <ToDoItem
        index={0}
        title="Wash Clothes"
        isCompleted={false}
        isHidden={false}
        onDone={() => {}}
        onHide={() => {}}
        onRemove={() => {}}
      />
    );

    const toDoContainer = screen.getByTestId("todo-item-container");

    const backgroundColor = getComputedStyle(toDoContainer).backgroundColor;

    const icon = queryByAltText("Check icon");

    expect(container.textContent).toEqual("Wash ClothesDoneRemove");

    expect(icon).toBeFalsy();

    // TODO - LOOK INTO ISSUE WITH STYLE COMPONENTS PROPS
    // expect(backgroundColor).toBe("rgb(235, 235, 235)");
  });

  it("displays correct UI when completed", () => {
    const { container, queryByAltText } = render(
      <ToDoItem
        index={0}
        title="Wash Clothes"
        isCompleted={true}
        isHidden={false}
        onDone={() => {}}
        onHide={() => {}}
        onRemove={() => {}}
      />
    );

    const toDoContainer = screen.getByTestId("todo-item-container");

    const backgroundColor = getComputedStyle(toDoContainer).backgroundColor;

    const icon = queryByAltText("Check icon");

    expect(container.textContent).toEqual("Wash ClothesUndoRemove");

    expect(icon).toBeTruthy();

    // TODO - LOOK INTO ISSUE WITH STYLE COMPONENTS PROPS
    // expect(backgroundColor).toBe("rgb(114, 198, 116)");
  });
});
