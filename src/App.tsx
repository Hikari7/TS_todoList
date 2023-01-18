import { useState } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Form from "./components/main/form";
import Todos from "./components/main/todos";

function App() {
  return (
    <>
      <Layout>
        <Form />
        <Todos />
      </Layout>
    </>
  );
}

export default App;
