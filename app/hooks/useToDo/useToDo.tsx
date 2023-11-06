import * as React from "react";
interface ToDoItem {
  name: string;
  completed: boolean;
  hidden: boolean;
}

export const useToDo = () => {
  const [toDoList, setToDoList] = React.useState<ToDoItem[]>([]);

  const handleAddToDoItem = React.useCallback((item: ToDoItem) => {
    setToDoList([...toDoList, item]);
  }, [toDoList]);

  const handleRemoveToDoItem = React.useCallback((index: number) => {
    setToDoList(toDoList.filter((_, i) => i !== index));
  }, [toDoList]);

  const handleRemoveAllToDos = React.useCallback(() => {
    setToDoList([]);
  }, []);

  const handleShowAllToDos = React.useCallback(() => {
    const newToDoList = [...toDoList];
    newToDoList.forEach((item) => (item.hidden = false));
    setToDoList(newToDoList);
  }, [toDoList]);

  const handleOnSubmit = React.useCallback((inputValue: string) => {
    handleAddToDoItem({ name: inputValue, completed: false, hidden: false });
  }, [handleAddToDoItem]);

  const handleCompletedToDoItem = React.useCallback((index: number) => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDoList(newToDoList);
  }, [toDoList]);

  const handleHideToDoItem = React.useCallback((index: number) => {
    const newToDoList = [...toDoList];
    newToDoList[index].hidden = !newToDoList[index].hidden;
    setToDoList(newToDoList);
  }, [toDoList]);

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
