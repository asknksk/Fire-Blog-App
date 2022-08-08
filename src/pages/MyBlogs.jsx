import BlogCard from "../components/BlogCard";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useFetch } from "../auth/firebase";
import { useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import { Box } from "@mui/material";

const MyBlogs = () => {
  const { content } = useSelector((state) => state.content);
  const { isLoading } = useFetch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Typography
        sx={{ fontFamily: "Girassol", textAlign: "center", color: "primary" }}
        variant="h2"
        noWrap
      >
        <Typography
          variant="h2"
          sx={{
            display: { xs: "none", md: "inline" },
            fontFamily: "Girassol",
            textAlign: "center",
            color: "primary",
          }}
        >
          ────
        </Typography>{" "}
        My Blogs{" "}
        <Typography
          variant="h2"
          sx={{
            display: { xs: "none", md: "inline" },
            fontFamily: "Girassol",
            textAlign: "center",
            color: "primary",
          }}
        >
          ────
        </Typography>
      </Typography>
      {isLoading && (
        <Box
          component="img"
          sx={{
            width: 40,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            cursor: "pointer",
          }}
          alt="cw"
          src={loadingGif}
        />
      )}

      {!isLoading && (
        <>
          <Container sx={{ marginTop: "4rem" }}>
            <Grid
              container
              justifyContent="center"
              spacing={2}
              sx={{ paddingTop: "2rem" }}
            >
              {content
                ?.filter((post) => post.userId === user.uid)
                .map((content) => (
                  <Grid item key={content.id}>
                    <BlogCard content={content} />
                  </Grid>
                ))}
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default MyBlogs;
