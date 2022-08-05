import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import placeHolderImg from "../assets/placeholder.png";
import Box from "@mui/material/Box";
import { DeleteButton, UpdateButton } from "../utils/buttons/Buttons";
import { useSelector } from "react-redux";
import { DeleteContent } from "../auth/firebase";
import { Paper } from "@mui/material";
import Comments from "../components/Comments";

export default function Details() {
  const { state } = useLocation();
  // id, blogContent, date, imgUrl, title, userEmail, userId ,comment
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleUpdate = () => {
    const { id, blogContent, date, imgUrl, title, userEmail, userId } = state;
    if (!user) {
      alert("Login for update of this blog!");
    }
    navigate(`/updateblog/${id}`, {
      state: { id, blogContent, date, imgUrl, title, userEmail, userId },
    });
  };
  return (
    <div>
      <div style={{ minHeight: "100vh" }}>
        <Typography
          sx={{ fontFamily: "Girassol", textAlign: "center", color: "primary" }}
          variant="h2"
          noWrap
        >
          ──── Details ────
        </Typography>
        <Card
          sx={{
            maxWidth: 600,
            width: "90%",
            margin: "auto",
          }}
        >
          <CardHeader
            title={
              <Typography
                variant="h4"
                sx={{ textAlign: "center", fontFamily: "Girassol" }}
              >
                {state.title.toUpperCase()}
              </Typography>
            }
          />
          <CardMedia
            component="img"
            height="300px"
            image={state.imgUrl ? state.imgUrl : placeHolderImg}
            alt={state.title}
          />
          <CardContent sx={{ bgcolor: "primary.light" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: "Girassol", fontSize: "1.5rem" }}
            >
              {state.blogContent}
            </Typography>
          </CardContent>

          <CardActions disableSpacing sx={{ textAlign: "center" }}>
            <IconButton>
              <ReplyAllIcon
                sx={{ color: "green" }}
                onClick={() => navigate(-1)}
              />
            </IconButton>
          </CardActions>

          {user?.uid === state?.userId ? (
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <UpdateButton onClick={handleUpdate}>UPDATE</UpdateButton>
              <DeleteButton onClick={() => DeleteContent(state.id, navigate)}>
                DELETE
              </DeleteButton>
            </Box>
          ) : null}
        </Card>
      </div>
      <div style={{ padding: 14 }} className="App">
        <h1>Comments</h1>
        <Paper style={{ padding: "40px 20px" }}>
          {/* map işlemi yapılacak gridlerde  */}
          {state.comment?.map((singleComment, index) => {
            return <Comments singleComment={singleComment} key={index} />;
          })}
          {/* {Object.keys(yourObject).map(function(key)} */}
        </Paper>
      </div>
    </div>
  );
}
