import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import cwJpeg from "../assets/cw.jpeg";
import { logout } from "../auth/firebase";
import { logoutUser } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // console.log(user);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log(anchorElNav);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    await logout();
    dispatch(logoutUser());
    navigate("/", {
      replace: true,
    });
  };

  return (
    <AppBar position="static" sx={{ mb: 1 }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableGutters
        >
          <Box
            component="img"
            sx={{
              width: 40,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              cursor: "pointer",
            }}
            alt="cw"
            src={cwJpeg}
            onClick={() => navigate("/")}
          />

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              component={RouterLink}
              to="/"
              sx={{
                color: "white",
                display: "block",
                fontSize: "1.2rem",
              }}
            >
              Askn Page
            </Button>
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography sx={{ color: "white", mr: 2 }}>
                    {user.displayName}
                  </Typography>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate("/newblog")}
                  >
                    New Blog
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogout}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  component={RouterLink}
                  to="/register"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                  }}
                >
                  Register
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  component={RouterLink}
                  textAlign="center"
                  to="/login"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                  }}
                >
                  Login
                </Typography>
              </MenuItem>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
