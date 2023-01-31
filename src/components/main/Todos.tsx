import {
  Box,
  Button,
  Container,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { TodoState } from "../../App";
import React, { useState } from "react";
import EditForm from "./EditForm";

//受け取るpropsをまとめる
interface Props {
  todos: TodoState["todos"];
  handleSetTodos: (updatedTodos: TodoState["todos"]) => void;
}

//edit用
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
    // const checkedTodo = todos.find((todo) => todo.id === id);
    // console.log(checkedTodo);
    // if (checkedTodo) {
    //   setChecked((checkedTodo.checked = !checked));
    // }

    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        console.log(todo.id);
        console.log(id);

        //toggle is working
        setChecked((todo.checked = !checked));
      }
      console.log(todo);
      return todo;
    });
    handleSetTodos(newTodo);
  };

  //newTodosにエラーが吐かれてしまう(newTodosはvoid, todoは型指定をしていたため)

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
                    {/* mapされてない？ */}
                    <Checkbox
                      onChange={() => handleChecked(todo.id, todo.checked)}
                    />

                    {checked ? (
                      <span className="checked">{todo.value}</span>
                    ) : (
                      <span>{todo.value}</span>
                    )}

                    {/* <FormGroup>
                      {checked ? (
                        <FormControlLabel
                          onChange={() => handleChecked(todo.id, todo.checked)}
                          control={<Checkbox disabled checked />}
                          label={todo.value}
                        />
                      ) : (
                        <FormControlLabel
                          onChange={() => handleChecked(todo.id, todo.checked)}
                          control={<Checkbox />}
                          label={todo.value}
                        />
                      )}
                    </FormGroup> */}
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
                          // todos={todos}
                          handleSetTodos={handleSetTodos}
                          todos={[]}
                          todo={todo}
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
