import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        width: "27rem",
        minWidth: "300px",
        display: "flex",
        flexDirection: "column",
        m: "auto",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="outlined-required" label="Title" sx={{ m: 2 }} />

      <TextField
        required
        id="outlined-required"
        label="Image URL "
        sx={{ m: 2 }}
      />
      <TextField
        id="outlined-multiline-static"
        label="Content"
        multiline
        required
        rows={4}
        sx={{ m: 2 }}
      />
      <Button type="submit" variant="contained" sx={{ m: 2 }}>
        Add Blog{" "}
      </Button>
    </Box>
  );
}
