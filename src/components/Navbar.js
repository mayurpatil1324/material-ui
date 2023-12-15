import styled from "@emotion/styled";
import { Avatar, Stack } from "@mui/material";

import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import Search from "@mui/icons-material/Search";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "white" }}>
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
            color: "black",
          }}
        >
          mYur
        </Typography>
        <InstagramIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Box sx={{ borderRadius: "10px" }}>
          <Search>
            <InputBase placeholder="search..."></InputBase>
          </Search>
        </Box>
        <Box>
          <icons>
            <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
            </Badge>
          </icons>
        </Box>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
