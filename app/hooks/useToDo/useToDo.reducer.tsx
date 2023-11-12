import * as React from "react";
interface ToDoItem {
  name: string;
  completed: boolean;
  hidden: boolean;
}

interface Action {
  type: "add" | "remove" | "complete" | "hide" | "showAll" | "removeAll";
  item: ToDoItem;
}

const reducer = (state: ToDoItem[], action: Action) => {
  const { type } = action;

  switch (type) {
    case "add":
      return [...state, action.item];
    case "remove":
      return state.filter((state) => state.name !== action.item?.name);
    case "complete":
      const completeToDoList = state.map((item) => {
        if (item === action.item) {
          const completedToggle = !action.item.completed;
          return { ...action.item, completed: completedToggle };
        }
        return item;
      });
      return completeToDoList;
    case "hide":
      const hideToDoList = state.map((item) => {
        if (item === action.item) {
          const hideToDoList = !action.item.hidden;
          return { ...action.item, hidden: hideToDoList };
        }
        return item;
      });
      return hideToDoList;
    case "showAll":
      const showAllToDoList = [...state];
      showAllToDoList.forEach((item) => (item.hidden = false));
      return showAllToDoList;
    case "removeAll":
        return [];
    default:
      return state;
  }
};

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data[0].name, "test")
    return data[0].name;
  } catch (error) {
    return null
  }
}

export { fetchUsers }

export const useToDo = () => {
  const [data, setData] = React.useState<any>(null);

  /*const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setData(data))
  }*/

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data)
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const [state, dispatch] = React.useReducer(reducer, []);

  const handleOnSubmit = (inputValue: string) => {
    dispatch({
      type: "add",
      item: { name: inputValue, completed: false, hidden: false },
    });
  };

  const handleRemoveToDoItem = React.useCallback(
    (index: number) => {
      dispatch({ type: "remove", item: state[index] });
    },
    [state]
  );

  const handleCompletedToDoItem = React.useCallback(
    (index: number) => {
      dispatch({ type: "complete", item: state[index] });
    },
    [state]
  );

  const handleHideToDoItem = React.useCallback(
    (index: number) => {
      dispatch({type: "hide", item: state[index] })
    },
    [state]
  );

  const handleShowAllToDos = React.useCallback(() => {
    dispatch({type: "showAll", /* dummy item not used */ item: {name: "", completed: false, hidden: false}})
  }, []);

  const handleRemoveAllToDos = React.useCallback(() => {
    dispatch({type: "removeAll", /* dummy item not used */ item: {name: "", completed: false, hidden: false}});
  }, []);

  return {
    data,
    state,
    fetchUsers,
    handleRemoveToDoItem,
    handleRemoveAllToDos,
    handleShowAllToDos,
    handleOnSubmit,
    handleCompletedToDoItem,
    handleHideToDoItem,
  };
};
