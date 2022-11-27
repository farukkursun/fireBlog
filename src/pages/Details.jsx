import React, { useContext} from "react";
import { DeleteUser, useFetch } from "../helper/firebase";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { AuthCont } from "../contexts/AuthContext";

const Details = () => {
  const navigate=useNavigate()
  const { blogList } = useFetch();
  const { currentUser } = useContext(AuthCont);
  console.log(blogList);
  const { id } = useParams();
  console.log(id);
  return (
    <div className="details">
      <Typography
      className="text"
        variant="h3"
        component="h1"
        sx={{ m: "auto", mb:2 }}
      >
       DETAILS
      </Typography>
      {blogList
        ?.filter((i) => i.id === id)
        .map((a) => {
          return (
            <Card sx={{ maxWidth: 600 }} key={a.id}>
              <CardMedia
                component="img"
                height="400"
                image={a.image}
                alt="a.image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                  {a.tittle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {a.newdate}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{height:140}}>
                  {a.content}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {a.user}
                </Typography>
              </CardContent>
              {a.user === currentUser.email && (
                <CardActions>
                  <Button  onClick={() => navigate("/updateblog/" + a.id,{state:{a}})} size="small">Update</Button>
                  <Button onClick={()=> DeleteUser(a.id,navigate)} size="small">Delete</Button>
                </CardActions>
              )}
            </Card>
          );
        })}
    </div>
  );
};

export default Details;
