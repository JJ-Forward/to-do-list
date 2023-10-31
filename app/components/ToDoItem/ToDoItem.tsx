import React from "react";
import {
  ButtionContainer,
  IconContainer,
  Item,
  ItemTextContainer,
  MainContent,
} from "./ToDoItem.styles";
import { ToDoItemProps } from "./ToDoItem.types";
import ToDoButton from "../TodoButton/ToDoButton";
import CloseIcon from "../../../public/icons/XSolid.svg";
import CompletedIcon from "../../../public/icons/CheckSolid.svg";
import Image from "next/image";
import { Color } from "@/app/constants/color";

const ToDoItem = ({
  index,
  isCompleted,
  title,
  onDone,
  onHide,
  onRemove,
}: ToDoItemProps) => {
  
  const doneButtonText = isCompleted ? "Undo" : "Done";
  const doneButtonColor = isCompleted ? Color.BLUE : Color.GREEN;

  const handleOnDone = () => {
    onDone(index);
  };

  const handleOnRemove = () => {
    onRemove(index);
  };

  const handleOnHide = () => {
    onHide(index);
  }

  return (
    <Item style={{backgroundColor: isCompleted ? 'var(--light-green)' : 'var(--gray)' }}>
      {isCompleted && (
        <IconContainer>
          <Image src={CompletedIcon} alt="Check icon" width={18} height={14} />
        </IconContainer>
      )}
      <MainContent>
        <ItemTextContainer>{title}</ItemTextContainer>
        <ButtionContainer>
          <ToDoButton
            title={doneButtonText}
            onPress={handleOnDone}
            colorVariant={doneButtonColor}
            hasBorder={false}
          />
          <ToDoButton
            title="Remove"
            onPress={handleOnRemove}
            colorVariant={Color.RED}
            hasBorder={false}
          />
        </ButtionContainer>
      </MainContent>
      <IconContainer>
        <Image
          src={CloseIcon}
          alt="close button icon"
          onClick={handleOnHide}
          width={12}
          height={12}
          style={{ cursor: "pointer" }}
        />
      </IconContainer>
    </Item>
  );
};

export default ToDoItem;
