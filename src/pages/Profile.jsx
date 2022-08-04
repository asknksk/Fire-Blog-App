import { useState } from "react";
import { updateUser, auth } from "../auth/firebase";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/auth";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser({ displayName });
    navigate("/");
    dispatch(loginUser(auth.currentUser));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            required
            fullWidth
            id="displayName"
            label="Display Name"
            name="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Change Display Name
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
