import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import { Toolbar, Typography } from "@mui/material";
import Todos from "./components/main/Todos";

interface TodoState {
  todos: {
    value: string;
    id: number;
    checked: false;
  }[];
  //↑配列になるので[]も書いておく
}

function App() {
  //もし配列の中が空だったらTSは型のタイプがわからないので<TodoState>で予め型を宣言しておく
  //stateをtypeと一緒に宣言したよ
  const [todos, setTodos] = useState<TodoState["todos"]>([]);

  // todos.map((todo) => {
  //   todo.value
  // });

  return (
    <>
      <Layout>
        <Toolbar variant="dense">
          <Typography variant="h5" color="primary" sx={{ marginTop: 6 }}>
            My Tasks
          </Typography>
        </Toolbar>
        {/* 子に渡す */}
        {/* <Form todo={null} setTodo={null} /> */}
        <Todos todos={todos} />
      </Layout>
    </>
  );
}

export default App;
