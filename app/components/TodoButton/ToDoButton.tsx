import React from "react";
import { ToDoButtonContainer } from "./ToDoButton.styles";
import { ToDoButtonProps } from "./ToDoButton.types";
import { get } from "http";
import { Color } from "@/app/constants/color";

const ToDoButton = ({
  title,
  onPress,
  colorVariant,
  hasBorder,
}: ToDoButtonProps) => {

  const getColor = (color: Color) => {
    switch (color) {
      case "RED":
          return "#FF7C5B";
      case "BLUE":
          return "#009BCE";
      case "GREEN":
          return "#72C674";
      default:
          return "#72C674";
  }
  };

  return (
    <ToDoButtonContainer
      style={{ backgroundColor: getColor(colorVariant), border: hasBorder ? "1px solid var(--white)" : "none" }}
      onClick={onPress}
    >
      {title}
    </ToDoButtonContainer>
  );
};

export default ToDoButton;
