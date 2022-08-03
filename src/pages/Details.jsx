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

const randomImage = "https://picsum.photos/600/400";

export default function Details() {
  const { state } = useLocation();
  // id, blogContent, date, imgUrl, title, userEmail, userId

  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", padding: "5rem 0" }}>
      <Card sx={{ maxWidth: 600, width: "90%", margin: "auto" }}>
        <CardHeader
          title={
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              {state.title.toUpperCase()}
            </Typography>
          }
        />
        <CardMedia
          component="img"
          height="max-content"
          image={state.imageUrl ? state.imageUrl : randomImage}
          alt={state.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
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
      </Card>
    </div>
  );
}
