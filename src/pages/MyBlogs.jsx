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
        ──── My Blogs ────
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
              spacing={4}
              sx={{ paddingTop: "2rem" }}
            >
              {content
                ?.filter((post) => post.userId === user.uid)
                .map((content) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    lg={4}
                    spacing={2}
                    key={content.id}
                  >
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