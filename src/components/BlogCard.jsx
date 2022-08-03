import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Box from "@mui/material/Box";
import placeHolderImg from "../assets/placeholder.png";
import { useSelector } from "react-redux";

export default function BlogCard({ content }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={content.imgUrl || placeHolderImg}
        alt="content-img"
      />

      <CardContent>
        <Typography variant="body2" color="secondary">
          {content.title}
        </Typography>
        <Typography variant="body2" color="secondary">
          {content.blogContent}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
        <Avatar sx={{ m: 1, width: 24, height: 24 }} />
        <Typography variant="body1" color="secondary">
          {user.email}{" "}
        </Typography>
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          0{" "}
        </Typography>
        <IconButton aria-label="add to comment">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          0{" "}
        </Typography>
      </CardActions>
    </Card>
  );
}
