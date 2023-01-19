import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Form from "./Form";

type Todo = {
  value: string;
  id: number;
  checked: false;
};

type Props = {
  todo: Todo;
};

const Todos = (props: { todo: null; setTodo: null }) => {
  // console.log(todo);

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
          <Typography>{/* <ul>{setTodo}</ul> */}</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Todos;
