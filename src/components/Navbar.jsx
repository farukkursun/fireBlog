import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { logOut } from "../helper/firebase";
import { useContext, useState } from "react";
import { AuthCont } from "../contexts/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthCont);
  console.log(currentUser);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              // component="a"
             
              sx={{
                mr: 2,

                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                
                textDecoration: "none",
              }}
            >
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                CLARUSWAY
              </Link>
            </Typography>

            <Box sx={{ m: "auto", display: "flex" }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  {"<FARUK/>"}
                  <span>BLOG</span>
                </Link>
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={currentUser.email}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={currentUser.displayName}
                    src={currentUser.photoURL}
                  />
                </IconButton>
              </Tooltip>
              {currentUser ? (
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
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">PROFILE</Typography>
                    </MenuItem>
                  </Link>

                  <Link
                    to="/new"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">NEW</Typography>
                    </MenuItem>
                  </Link>

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      role="button"
                      onClick={() => logOut()}
                      textAlign="center"
                    >
                      LOGAUT
                    </Typography>
                  </MenuItem>
                </Menu>
              ) : (
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
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">LOGIN</Typography>
                    </MenuItem>
                  </Link>

                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">REGISTER</Typography>
                    </MenuItem>
                  </Link>
                </Menu>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
