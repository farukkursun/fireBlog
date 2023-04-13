import React, { useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { UpdateUser } from "../helper/firebase";
import { TextareaAutosize } from "@mui/material";

const theme = createTheme();

const UpdateBlog = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state);

  const [tittle, setTittle] = useState(state.a.tittle);
  const [image, setImage] = useState(state.a.image);
  const [content, setContent] = useState(state.a.content);

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateUser(state.a.id, tittle, image, content, state.a.user, navigate);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={state.a.image} alt="blok" />
            <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
              UPDATE BLOG
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                value={tittle}
                onChange={(e) => setTittle(e.target.value)}
                id="tittle"
                // label='tittle'
                name="tittle"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
                fullWidth
                name="image"
                // label="image URL"
                id="image"
              />
              <TextareaAutosize
                margin="normal"
                type="text"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                minRows={5}
                maxRows={15}
                style={{ width: 400 }}
                id="content"
                // label="Content"
                name="content"
                autoFocus
              />
              <Button
                type="submit"
               
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update
              </Button>
              <Button
                type="button"
                width=''
                variant="contained"
                sx={{ mt: 3, mb: 2, ml:2}}
              >
                <Link className="goback" to={-1}>Back</Link>
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      )
    </div>
  );
};

export default UpdateBlog;
