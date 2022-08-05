import { useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decreaseFav, increaseFav } from "../auth/firebase";
import Modal from "../components/Modal";
import { openModal } from "../store/modal";
import store from "../store";
import { setComment } from "../store/clickedComment";

export default function BlogCard({ content, redLike, setRedLike }) {
  const [isValid, setIsValid] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { clickedComment } = useSelector((state) => state.clickedComment);

  const { open, data } = useSelector((state) => state.modal);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const openDetails = () => {
    const { id, blogContent, date, imgUrl, title, userEmail, userId, comment } =
      content;
    if (!user) {
      alert("Login for detials of blog!");
    }
    navigate(`/detail/${id}`, {
      state: {
        id,
        blogContent,
        date,
        imgUrl,
        title,
        userEmail,
        userId,
        comment,
      },
    });
  };

  const handleLike = () => {
    if (user) {
      if (!Object.values(content.likes).includes(user.uid)) {
        increaseFav(content, user.uid);
        setRedLike(true);
      } else {
        decreaseFav(content, user.uid);
        setRedLike(false);
      }
    } else {
      alert("You should login first");
    }

    console.log(content.countLike);
  };

  const handleComment = () => {
    store.dispatch(setComment(content));
    handleOpen();
    store.dispatch(
      openModal({
        name: "comment-modal",
      })
    );
  };

  function chechkLike() {
    if (Object.values(content.likes).includes(user.uid)) {
      setRedLike(true);
    } else setRedLike(false);
  }

  function checkImage(url) {
    var image = new Image();
    image.onload = function () {
      if (this.width > 0) {
        setIsValid(true);
      }
    };
    image.onerror = function () {
      setIsValid(false);
    };
    image.src = url;
  }

  checkImage(content.imgUrl);
  chechkLike();
  return (
    <>
      {open && (
        <Modal
          name={open}
          data={data}
          handleOpen={handleOpen}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      <Card sx={{ maxWidth: 345 }}>
        <Box onClick={openDetails} sx={{ cursor: "pointer" }}>
          <CardMedia
            component="img"
            height="140"
            image={isValid ? content.imgUrl : placeHolderImg}
            alt="content-img"
          />

          <CardContent sx={{ bgcolor: "primary.light" }}>
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontFamily: "Girassol" }}
            >
              {content.title}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              {content.date}
            </Typography>
            <Typography variant="body1" color="secondary">
              {content.blogContent}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
          <Avatar sx={{ m: 1, width: 24, height: 24 }} />
          <Typography variant="body1" color="secondary">
            {content.userEmail}{" "}
          </Typography>
        </Box>
        <CardActions disableSpacing>
          {/* {red ? ( */}
          <IconButton
            aria-label="add to favorites"
            sx={redLike && { color: "red" }}
            onClick={() => handleLike()}
          >
            {" "}
            <FavoriteIcon />
          </IconButton>

          <Typography variant="body2" color="text.secondary">
            {content.countLike || 0}
          </Typography>
          <IconButton
            aria-label="add to comment"
            onClick={() => handleComment()}
          >
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            0{" "}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}
