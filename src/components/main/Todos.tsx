import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Form from "./Form";

//受け取るpropsもtype宣言する
interface TodoProps {
  todos: {
    value: string;
    id: number;
    checked: false;
  }[];
  //↑配列になるので[]も書いておく
}

// const Todos = (props: { todo: null; setTodo: null }) => {
//親からpropsを受け取る
const Todos = ({ todos }: TodoProps): JSX.Element => {
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
          <Typography>
            {" "}
            <ul>{todos.value}</ul>
            {/* ✅どうやってレンダリングするのか考える */}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Todos;
