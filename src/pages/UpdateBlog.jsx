import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import moment from "moment";
import { useLocation } from "react-router-dom";

export default function UpdateBlog() {
  const { state } = useLocation();

  // id, blogContent, date, imgUrl, title, userEmail, userId

  const { user } = useSelector((state) => state.auth);
  const [values, setValues] = useState(state);
  const [info, setInfo] = useState("");

  //   console.log(state, "singleContent");

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({
      ...values,
      userId: user.uid,
      userEmail: user.providerData[0].email,
      date: moment().format("ll"),
    });
  };
  console.log(info);

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
        value={values.title}
        onChange={handleChange}
      />

      <TextField
        required
        id="outlined-required"
        label="Image URL "
        name="imgUrl"
        value={values.imgUrl}
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
        value={values.blogContent}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" sx={{ m: 2 }}>
        Add Blog{" "}
      </Button>
    </Box>
  );
}
