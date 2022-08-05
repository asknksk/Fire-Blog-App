import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { UpdateComment } from "../../auth/firebase";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

export default function AddCommentModal({ handleClose }) {
  const { user } = useSelector((state) => state.auth);
  const { clickedComment } = useSelector((state) => state.clickedComment);
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
  useEffect(() => {
    // let deneme = {
    //   comment: singleComment,
    //   commentEmail: user.providerData[0].email,
    //   commentImgUrl: user.photoURL,
    //   commentTime: moment().format("LLL"),
    // };
    setInfo({
      ...clickedComment,
      comment: {
        ...clickedComment.comment,
        [uuidv4()]: {
          comment: singleComment,
          commentEmail: user.providerData[0].email,
          commentImgUrl: user.photoURL,
          commentTime: moment().format("LLL"),
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleComment]);
  const handleAddComment = (e) => {
    e.preventDefault();

    UpdateComment(info);

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
        required
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
