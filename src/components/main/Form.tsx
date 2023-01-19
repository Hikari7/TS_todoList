import { Button, Container, TextField, unstable_useId } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

// const Form = ({ text }: Props) => {
const Form = (props: { todo: null; setTodo: null }) => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  type Todo = {
    value: string;
    id: number;
    checked: false;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);

    //newTodoはTodoの型と合わせることを記述
    const newTodo: Todo = {
      value: value,
      id: Date.now(),
      checked: false,
    };

    setTodo([newTodo, ...todo]);
    // setTodo("");
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

{
  /* <AddIcon
            name="details"
            onSubmit={handleSubmit("detail")}
            sx={{
              fontSize: 25,
              color: "#333",
              display: "block",
              "&:hover": {
                opacity: 0.3,
              },
            }}
          /> */
}
