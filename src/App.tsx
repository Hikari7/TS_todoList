import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import { Toolbar, Typography } from "@mui/material";
import Todos from "./components/main/Todos";
import Form from "./components/main/Form";

//型を書いて別のコンポーネントにexportすることも可能
//オブジェクトにすることでまとめて書くことができる
export interface TodoState {
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

//こんな書き方もある
// interface TestTypeObj {
//   value: string;
//   id: number;
//   checked: boolean;
// }
// interface TestTypeArr {
//   todos:TestTypeObj[],
//   todos2:Array<TestTypeObj>
// }

function App() {
  //もし配列の中が空だったらTSは型のタイプがわからないので<TodoState>で予め型を宣言しておく
  //stateをtypeと一緒に宣言したよ
  const [todos, setTodos] = useState<TodoState["todos"]>([]);

  //setTodosを更新するための関数(つまりsetTodos)
  //関数の中に引数を渡すときもその引数の中に型をかく
  const handleSetTodos = (updatedTodos: TodoState["todos"]) => {
    setTodos(updatedTodos);
  };
  console.log(todos);

  return (
    <>
      <Layout>
        <Toolbar variant="dense">
          <Typography variant="h5" color="primary" sx={{ marginTop: 6 }}>
            My Tasks
          </Typography>
        </Toolbar>
        {/* handleSetTodos(setTodos:更新された最新のtodos)を子に渡して更新できるようにする */}
        {/* FotmでhandleSetTodosを更新、todosでもそのまま更新されるからそれを使っていく */}
        <Form todos={todos} handleSetTodos={handleSetTodos} />
        <Todos todos={todos} handleSetTodos={handleSetTodos} />
      </Layout>
    </>
  );
}

export default App;
