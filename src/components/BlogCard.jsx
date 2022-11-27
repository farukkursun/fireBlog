import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useFetch } from "../helper/firebase";
import { useNavigate } from "react-router-dom";

const BlogCard = () => {
  const { istLoading, blogList } = useFetch();
  console.log(blogList);
  const navigate = useNavigate();
  
  return (
    <div className="blogcard">
      {blogList?.map((item) => {
        return (
          <Card
        
            onClick={() => navigate("/details/" + item.id)} 
            sx={{ maxWidth: 345, minWidth: 250 }}
            key={item.id}
          >
            <CardMedia
              component="img"
              height="250"
              image={item.image}
              alt="item.image"
            />
            <CardContent sx={{height:250}}>
              <Typography gutterBottom variant="h5" component="div">
                {item.tittle}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="left">
                {item.newdate}
              </Typography>

              <Typography  sx={{height:170}} variant="body2" color="text.secondary" align="left" >
                {item.content}
              </Typography>
              <Typography gutterBottom variant="body1" component="div" align="left">
              {item.user}
            </Typography>
            </CardContent>
            
            
          </Card>
        );
      })}
    </div>
  );
};

export default BlogCard;
