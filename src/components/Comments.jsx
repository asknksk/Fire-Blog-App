import { Avatar, Divider, Grid } from "@mui/material";

const Comments = ({ singleComment }) => {
  const { comment, commentEmail, commentImgUrl, commentTime } = singleComment;

  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        {commentImgUrl ? (
          <Grid item>
            <Avatar alt="Remy Sharp" src={commentImgUrl && "A"} />
          </Grid>
        ) : null}

        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{commentEmail}</h4>
          <p style={{ textAlign: "left" }}>{comment}</p>
          <p style={{ textAlign: "left", color: "gray" }}>{commentTime} </p>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
    </>
  );
};

export default Comments;
