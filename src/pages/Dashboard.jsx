import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import spinner from "../assets/spinner.gif";
import nonphoto from "../assets/placeholder.png";

export default function Dashboard({ title, overview, vote_average, id }) {
  const navigate = useNavigate();
  const [loaded, setLoaded] = React.useState(false);
  const { user } = useSelector((state) => state.auth);

  const onImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <div>
      <Typography
        sx={{ fontFamily: "Girassol", textAlign: "center", color: "#046582" }}
        variant="h3"
        noWrap
      >
        ──── Dashboard ────
      </Typography>
      <Card
        className="card"
        sx={{ maxWidth: 300, margin: "auto" }}
        onClick={() => {
          user
            ? navigate("/detail/" + id)
            : alert("Please login to see detail");
        }}
      >
        <Typography className="overview" variant="body1" color="text.primary">
          {overview}
        </Typography>
        <CardMedia
          component="img"
          height="300"
          onLoad={onImageLoaded}
          image={loaded ? nonphoto : spinner}
          alt={title}
          sx={{ objectFit: "contain" }}
        />

        <CardActions>
          <Button size="small">DETAILS</Button>
          <Typography variant="h4" color="primary" sx={{ marginLeft: "auto" }}>
            {vote_average}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}
