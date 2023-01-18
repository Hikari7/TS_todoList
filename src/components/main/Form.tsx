import { Container, TextField } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Form = () => {
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
        <TextField
          id="standard-basic"
          label="Add to do"
          variant="standard"
          margin="none"
          fullWidth
          sx={{ fontSize: 40, color: "pink" }}
        />
        <AddIcon
          sx={{
            fontSize: 25,
            color: "#333",
            display: "block",

            "&:hover:": {
              cursor: "pointer",
            },
          }}
        />
      </Container>
    </>
  );
};

export default Form;
