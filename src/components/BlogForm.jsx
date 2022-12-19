import React, { useContext, useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blok from "../assets/blok.png";
import { addUser } from "../helper/firebase";
import { AuthCont } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { TextareaAutosize } from "@mui/material";



const theme = createTheme();

const BlogForm = () => {
  const navigate=useNavigate()





  const newdate=new Date().toDateString().slice(4)


  const { currentUser } = useContext(AuthCont);
  const user = currentUser.email
 
  const [tittle, setTittle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(tittle, image, content,user,newdate,navigate);
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
            <img src={blok} alt="blok" />
            <Typography component="h1" variant="h5">
              New Blog
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
                label="Tittle"
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
                label="image URL"
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
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default BlogForm;
