"use client";
import * as React from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ToDoButton from "./components/TodoButton/ToDoButton";
import ToDoListContainer from "./components/ToDoListContainer/ToDoListContainer";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import ToDoInput from "./components/ToDoInput/ToDoInput";
import { useToDo } from "./hooks/useToDo/useToDo";
import { Color } from "./constants/color";

export default function Home() {
  const {
    toDoList,
    handleRemoveToDoItem,
    handleRemoveAllToDos,
    handleShowAllToDos,
    handleOnSubmit,
    handleCompletedToDoItem,
    handleHideToDoItem,
  } = useToDo();

  return (
    <MainContainer>
      <Header />
      <ToDoInput onSubmit={handleOnSubmit} />
      <ToDoListContainer>
        {toDoList &&
          toDoList.length > 0 &&
          toDoList.map((item, index) => {
            if (item.hidden) return null;
            return (
              <ToDoItem
                key={index}
                index={index}
                isCompleted={item.completed}
                isHidden={item.hidden}
                title={item.name}
                onDone={handleCompletedToDoItem}
                onRemove={handleRemoveToDoItem}
                onHide={handleHideToDoItem}
              />
            );
          })}
      </ToDoListContainer>
      <Footer>
        <ToDoButton
          title="Remove All"
          onPress={handleRemoveAllToDos}
          colorVariant={Color.RED}
          hasBorder={true}
        />
        <ToDoButton
          title="Show All"
          onPress={handleShowAllToDos}
          colorVariant={Color.BLUE}
          hasBorder={true}
        />
      </Footer>
    </MainContainer>
  );
}
