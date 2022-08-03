import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import moment from "moment";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UpdateBlogContent } from "../auth/firebase";

export default function UpdateBlog() {
  const { state } = useLocation();

  // id, blogContent, date, imgUrl, title, userEmail, userId

  const { user } = useSelector((state) => state.auth);
  const [values, setValues] = useState(state);
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    setInfo({
      ...values,
      userId: user.uid,
      userEmail: user.providerData[0].email,
      date: moment().format("ll"),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(info);
    UpdateBlogContent(info, navigate);
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
        Update Blog{" "}
      </Button>
    </Box>
  );
}
