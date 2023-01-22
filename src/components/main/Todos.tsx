import { Box, Button, Container, Checkbox, Typography } from "@mui/material";
import { TodoState } from "../../App";
import React, { useState } from "react";
import EditForm from "./EditForm";

interface Props {
  todos: TodoState["todos"];
  handleSetTodos: (updatedTodos: TodoState["todos"]) => void;
}

export interface CurrentTodoState {
  //配列のtodo
  todos: {
    value: string;
    id: number;
    checked: boolean;
  }[];
  //↑配列になるので[]も書いておく

  //単体のtodo
  todo: {
    value: string;
    id: number;
    checked: boolean;
  };
}
// interface TodoObj {
//   todos: {
//     value: string;
//     id: number;
//     checked: false;
//   }[];
// }

// interface TodoArr {
//   todos: TodoObj[];
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

const Todos = ({ todos, handleSetTodos }: Props) => {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    handleSetTodos(newTodos);
  };

  const handleChecked = (id: number, checked: boolean) => {
    //checkのtoggleはできてる
    const checkedTodo = todos.find((todo) => todo.id === id);
    console.log(checkedTodo);
    if (checkedTodo) {
      setChecked((checkedTodo.checked = !checked));
    }
  };

  //newTodosにエラーが吐かれてしまう(newTodosはvoid, todoは型指定をしていたため)
  // setTodos(newTodos);

  const handleDeleteAll = () => {
    handleSetTodos([]);
  };

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
                <Box sx={{ display: "flex" }}>
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

                    {checked ? (
                      <span className="checked">{todo.value}</span>
                    ) : (
                      <span>{todo.value}</span>
                    )}

                    {/* <Typography
                        sx={{
                          width: "100%",
                          verticalAlign: "middle",
                          display: "table-cell",
                          marginLef: 2,
                          textDecoration: "line-through",
                        }}
                        key={todo.id}
                      >
                        {todo.value}
                      </Typography> */}
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
                          todos={todos}
                          handleSetTodos={handleSetTodos}
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

function setTodos(newTodos: { value: string; id: number; checked: boolean }[]) {
  throw new Error("Function not implemented.");
}
