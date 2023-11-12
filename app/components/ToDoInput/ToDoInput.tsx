import React, { memo } from "react";
import { ToDoInputProps } from "./ToDoInput.types";
import { Button, Input, InputContainer } from "./ToDoInput.styles";

interface HandleChangeInterface {
  target: HTMLInputElement;
}

const ToDoInput = ({ onSubmit }: ToDoInputProps) => {
  const [toDoInput, setToDoInput] = React.useState<string>("");

  const handleOnChange = (e: HandleChangeInterface) => {
    setToDoInput(e.target.value);
  };

  const handleOnSubmit = () => {
    if (!toDoInput) return;
    onSubmit(toDoInput);
    setToDoInput("");
  };

  return (
    <InputContainer>
      <Input
        name="toDoInput"
        onChange={handleOnChange}
        value={toDoInput}
        placeholder="To do name..."
      />
      <Button onClick={handleOnSubmit}>Add To Do</Button>
    </InputContainer>
  );
};

export default ToDoInput;
