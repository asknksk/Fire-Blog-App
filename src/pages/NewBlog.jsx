import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import addContent from "../store/content";
import { AddContentDatabase } from "../auth/firebase";

const initialValues = { title: "", imgUrl: "", blogContent: "" };

export default function FormPropsTextFields() {
  // const { content } = useSelector((state) => state.content);
  const { user } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const [info, setinfo] = useState(initialValues);

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setinfo({ ...info, [name]: value, ["userId"]: user.uid });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddContentDatabase(info);
    // dispatch(addContent());
    // console.log(content);
    console.log(info);
    // writeUserData(user.uid, title, imgUrl, blogContent)
    // console.log(user.uid);
  };

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
      onSubmit={handleSubmit}
    >
      <TextField
        required
        id="outlined-required"
        label="Title"
        name="title"
        sx={{ m: 2 }}
        // value={info.title}
        onChange={handleChange}
      />

      <TextField
        required
        id="outlined-required"
        label="Image URL "
        name="imgUrl"
        // value={info.imgUrl}
        onChange={handleChange}
        sx={{ m: 2 }}
      />
      <TextField
        id="outlined-multiline-static"
        label="Content"
        multiline
        required
        rows={4}
        sx={{ m: 2 }}
        name="blogContent"
        // value={info.blogContent}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" sx={{ m: 2 }}>
        Add Blog{" "}
      </Button>
    </Box>
  );
}
