import { useState } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Form from "./components/main/Form";
import Todos from "./components/main/Todos";
import { Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Layout>
        <Toolbar variant="dense">
          <Typography variant="h5" color="primary" sx={{ marginTop: 6 }}>
            My Tasks
          </Typography>
        </Toolbar>
        <Form text={""} />
        <Todos text={""} />
      </Layout>
    </>
  );
}

export default App;
