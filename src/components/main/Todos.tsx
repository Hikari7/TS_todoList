import { Box, Container, Typography } from "@mui/material";
import { TodoState } from "../../App";

interface Props {
  todos: TodoState["todos"];
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
const Todos = ({ todos }: Props) => {
  // const Todos = ({ todos }: TodoArr) => {
  console.log(todos);

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
          {todos?.map((todo: TodoState["todo"]) => {
            return <div key={todo.id}>{todo.value}</div>;
          })}
        </Box>
      </Container>
    </>
  );
};

export default Todos;

//受け取るpropsもtype宣言する
// interface TodoProps {
//   todos: {
//     value: string;
//     id: number;
//     checked: false;
//   }[];
//   //↑配列になるので[]も書いておく
// }
