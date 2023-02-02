import {
  Box,
  Button,
  Container,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { TodoState } from "../../App";
import React, { useState, Dispatch, SetStateAction } from "react";
import EditForm from "./EditForm";

//受け取るpropsをまとめる
// interface Props {
//   todos: TodoState["todos"];
//   handleSetTodos: (updatedTodos: TodoState["todos"]) => void;
// }
interface Props {
  todos: TodoState["todos"];
  handleSetTodos: (updatedTodos: TodoState["todos"]) => void;
}

type TodoType = {
  value: string;
  id: number;
  checked: boolean;
};

//edit用
export interface CurrentTodoState {
  //配列のtodo
  todos: TodoType[];
  //↑配列になるので[]も書いておく

  //単体のtodo
  todo: TodoType;
}

const Todos = ({ todos, handleSetTodos }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo: TodoType) => todo.id !== id);
    handleSetTodos(newTodos);
  };

  const handleChecked = (id: number, checked: boolean) => {
    const updatedTodos = todos.map((item: TodoType) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });

    handleSetTodos(updatedTodos);
  };

  const handleDeleteAll = () => {
    handleSetTodos([]);
  };

  //もしeditボタンがcurrentIdとマッチしたら、
  

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          marginTop: 6,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            minWidth: "100%",
            minHeight: 300,
            backgroundColor: "#a8dadc",
            borderRadius: 3,
          }}
        >
          <ul>
            {todos?.map((todo: TodoState["todo"]) => {
              return (
                <Box sx={{ display: "flex" }} key={todo.id}>
                  <Box
                    sx={{
                      width: "80%",
                      backgroundColor: "#fffafabd",
                      marginTop: 1,
                      marginRight: 1,
                      borderRadius: 1,
                      display: "table",
                    }}
                  >
                    <Checkbox
                      onChange={() => handleChecked(todo.id, todo.checked)}
                    />

                    {todo.checked ? (
                      <span className="checked">{todo.value}</span>
                    ) : (
                      <span>{todo.value}</span>
                    )}
                  </Box>
                  <Box sx={{ display: "inline-flex" }}>
                    <Button
                      onClick={() => handleDelete(todo.id)}
                      variant="outlined"
                      sx={{
                        marginRight: 1,
                        marginTop: 1,
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      color="warning"
                      variant="outlined"
                      sx={{ marginRight: 1, marginTop: 1 }}
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      Edit
                    </Button>
                    <>
                    
                      {isEditing && (
                        <EditForm
                          setIsEditing={setIsEditing}
                          isEditing={isEditing}
                          handleSetTodos={handleSetTodos}
                          todo={todo}
                          todos={todos}
                        />
                      )}
                    </>
                  </Box>
                </Box>
              );
            })}
          </ul>
        </Box>
      </Container>
      <Button
        variant="contained"
        sx={{
          display: "block",
          margin: "auto",
          marginTop: 3,
        }}
        onClick={handleDeleteAll}
      >
        Delete all
      </Button>
    </>
  );
};

export default Todos;

// function setTodos(newTodos: { value: string; id: number; checked: boolean }[]) {
//   throw new Error("Function not implemented.");
// }

// const Todos = (props: { todo: null; setTodo: null }) => {
//親からpropsを受け取る

// interface TestTypeArr {
//   todos:TestTypeObj[],
//   todos2:Array<TestTypeObj>
// }

// interface EditState {
//   isEditing: boolean;
// }
