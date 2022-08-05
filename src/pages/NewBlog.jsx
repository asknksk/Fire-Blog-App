import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { AddContentDatabase } from "../auth/firebase";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const initialValues = { title: "", imgUrl: "", blogContent: "" };

export default function NewBlog() {
  const { user } = useSelector((state) => state.auth);
  const [values, setValues] = useState(initialValues);
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(user);
  };
  useEffect(() => {
    setInfo({
      ...values,
      userId: user.uid,
      userEmail: user.providerData[0].email,
      date: moment().format("ll"),
      countLike: 0,
      likes: [""],
      comment: [
        {
          comment: "No comment yet.",
          commentEmail: "",
          commentImgUrl: "",
          commentTime: moment().format("LLL"),
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AddContentDatabase(info, navigate);
    // setInfo(initialValues);
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
        value={info.title}
        onChange={handleChange}
      />

      <TextField
        required
        id="outlined-required"
        label="Image URL "
        name="imgUrl"
        value={info.imgUrl}
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
        value={info.blogContent}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" sx={{ m: 2 }}>
        Add Blog{" "}
      </Button>
    </Box>
  );
}
