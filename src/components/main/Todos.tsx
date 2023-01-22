import { Box, Button, Container, Checkbox, Typography } from "@mui/material";
import { TodoState } from "../../App";
import React, { useState } from "react";

interface Props {
  todos: TodoState["todos"];
  handleSetTodos: (updatedTodos: TodoState["todos"]) => void;
}
interface ThemeOptions {
  status: {
    danger: React.CSSProperties["color"];
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

const Todos = ({ todos, handleSetTodos }: Props) => {
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);

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

  // const handleEdit = (id: number) => {
  //   setEdit(!edit);
  // };

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
            backgroundColor: "#C4DFAA",
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

                    {/* {checked ? (
                      <Typography
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
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          width: "100%",
                          verticalAlign: "middle",
                          display: "table-cell",
                          marginLef: 2,
                        }}
                        key={todo.id}
                      >
                        {todo.value}
                      </Typography>
                    )} */}
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
                      // onClick={() => handleEdit(todo.id)}
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </ul>
        </Box>
      </Container>
    </>
  );
};

export default Todos;

function setTodos(newTodos: { value: string; id: number; checked: boolean }[]) {
  throw new Error("Function not implemented.");
}
//受け取るpropsもtype宣言する
// interface TodoProps {
//   todos: {
//     value: string;
//     id: number;
//     checked: false;
//   }[];
//   //↑配列になるので[]も書いておく
// }
