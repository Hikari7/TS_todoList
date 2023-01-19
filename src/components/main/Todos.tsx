import { Box, Container, Typography } from "@mui/material";
import React from "react";

type Props = {
  text: String;
};

const Todos = ({ text }: Props) => {
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
            backgroundColor: "#FFFFE8",
          }}
        >
          <Typography>
            <ul>{text}</ul>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Todos;
