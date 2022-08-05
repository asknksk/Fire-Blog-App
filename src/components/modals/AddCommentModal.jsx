import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { UpdateComment } from "../../auth/firebase";

export default function AddCommentModal({ handleClose }) {
  const { user } = useSelector((state) => state.auth);
  const { clickedComment } = useSelector((state) => state.clickedComment);
  const { content } = useSelector((state) => state.content);
  const [info, setInfo] = useState("");

  // comment: [
  //   {
  //     comment: "No comment yet.",
  //     commentEmail: "",
  //     commentImgUrl: "",
  //     commentTime: "",
  //   },
  // ],
  const [singleComment, setSingleComment] = useState("");
  const handleAddComment = (e) => {
    e.preventDefault();
    console.log(clickedComment);

    UpdateComment();
    // alert(user.providerData[0].email);
    // alert(user.photoURL);
    handleClose();
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
      autoComplete="off"
      onSubmit={handleAddComment}
    >
      <TextField
        id="outlined-multiline-static"
        label="Add you Comment"
        multiline
        // required
        rows={4}
        sx={{ m: 2 }}
        name="comment"
        value={singleComment}
        onChange={(e) => setSingleComment(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ m: 2 }}>
        Add Comment{" "}
      </Button>
    </Box>
  );
}
