import React from "react";
import BlogCard from "../components/BlogCard";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
const Dashboard = () => {
  return (
    <div>
      <Typography
        sx={{ fontFamily: "Girassol", textAlign: "center", color: "primary" }}
        variant="h2"
        noWrap
      >
        ──── Dashboard ────
      </Typography>
      <Container sx={{ marginTop: "4rem" }}>
        <Grid
          container
          justifyContent="center"
          spacing={4}
          sx={{ paddingTop: "2rem" }}
        >
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Grid>
      </Container>
    </div>
  );
};
export default Dashboard;
