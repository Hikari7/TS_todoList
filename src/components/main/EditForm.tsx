import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CurrentTodoState } from "../main/Todos";
import { TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

//Todoから型を持ってくるために新しいpropsの型をTodosのコンポーネント(EditFormの直属の親)で宣言して渡してます
//todosStateのままだったらtodo cannot be itterableみたいなエラーが出たので...

type Props = {
  todos: CurrentTodoState["todos"];
  handleSetTodos: (updatedTodos: CurrentTodoState["todos"]) => void;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  todo: CurrentTodoState["todo"];
};

export default function BasicModal({
  setIsEditing,
  isEditing,
  todos,
  todo,
  handleSetTodos,
}: Props) {
  const [value, setValue] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.currentTarget.value);
    console.log(setValue);
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);

    const newTodo = {
      value: value,
      id: Date.now(),
      checked: false,
    };

    console.log(newTodo.value);
    console.log(todo);

    //newtodoのidじゃなくてeditモードになっているidと一致させたい
    // if (todo.id === id) {
      // }
      return (todo.value = newTodo.value);
  };

  return (
    <div>
      <Modal
        open={isEditing}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit the todo
          </Typography>
          <form onSubmit={handleEditSubmit}>
            <TextField
              id="modal-modal-description"
              variant="standard"
              margin="none"
              fullWidth
              value={value}
              onChange={handleChange}
            />
            <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
              Add
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
