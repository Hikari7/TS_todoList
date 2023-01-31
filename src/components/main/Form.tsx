import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { TodoState } from "../../App";

//受け取るpropsにも型を宣言(TodoStateの型を受け取ってる)
interface TodoProps {
  todos: TodoState["todos"];
  handleSetTodos: (updatedTodos: TodoState["todos"]) => void;
}

//受け取るpropsの名前を:の後にちゃんと書いて宣言
const Form = ({ todos, handleSetTodos }: TodoProps) => {
  const [value, setValue] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //ここでhandleSetTodosの値を更新する
    // console.log(value); valueは取れてる
    //オブジェクトなので""で何のtypeか判断
    const newTodo: TodoState["todo"] = {
      value: value,
      id: Date.now(),
      checked: false,
    };

    //更新用のsetTodos
    //スプレッド構文で今持っている状態を持ってる
    handleSetTodos([...todos, newTodo]);
    setValue("");
    // console.log(todos);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            marginTop: 6,
            alignItems: "center",
          }}
        >
          <TextField
            id="standard-basic"
            label="Add to do"
            variant="standard"
            margin="none"
            fullWidth
            value={value}
            onChange={handleChange}
            sx={{ fontSize: 40, color: "pink" }}
          ></TextField>
          <Button variant="contained" type="submit">
            Add
          </Button>
        </Container>
      </form>
    </>
  );
};

export default Form;
