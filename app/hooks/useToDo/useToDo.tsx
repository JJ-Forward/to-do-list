import * as React from "react";
interface ToDoItem {
  name: string;
  completed: boolean;
  hidden: boolean;
}

export const useToDo = () => {
  const [toDoList, setToDoList] = React.useState<ToDoItem[]>([]);

  const handleAddToDoItem = (item: ToDoItem) => {
    setToDoList([...toDoList, item]);
  };

  const handleRemoveToDoItem = (index: number) => {
    setToDoList(toDoList.filter((_, i) => i !== index));
  };

  const handleRemoveAllToDos = () => {
    setToDoList([]);
  };

  const handleShowAllToDos = () => {
    const newToDoList = [...toDoList];
    newToDoList.forEach((item) => (item.hidden = false));
    setToDoList(newToDoList);
  };

  const handleOnSubmit = (inputValue: string) => {
    handleAddToDoItem({ name: inputValue, completed: false, hidden: false });
  };

  const handleCompletedToDoItem = (index: number) => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDoList(newToDoList);
  };

  const handleHideToDoItem = (index: number) => {
    const newToDoList = [...toDoList];
    newToDoList[index].hidden = !newToDoList[index].hidden;
    setToDoList(newToDoList);
  };

  return {
    toDoList,
    handleAddToDoItem,
    handleRemoveToDoItem,
    handleRemoveAllToDos,
    handleShowAllToDos,
    handleOnSubmit,
    handleCompletedToDoItem,
    handleHideToDoItem,
  };
};
