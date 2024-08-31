import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const MainNavBar = () => {
  return (
    <Stack direction="row" justifyContent={"space-between"} sx={{ p: 2 }}>
      <Link to="/">
        <Typography variant="h1">Home</Typography>
      </Link>
      <Link to="/about">
        <Typography variant="h1">About</Typography>
      </Link>
      <Link to="/dashboard">
        <Typography variant="h1">Dashboard</Typography>
      </Link>
    </Stack>
  );
};
