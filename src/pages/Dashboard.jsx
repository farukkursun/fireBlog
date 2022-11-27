import { Box, Typography } from "@mui/material";
import React from "react";
import BlogCard from "../components/BlogCard";

const Dashboard = () => {
  return (
    <Box textAlign='center' sx={{ mt:'40px'}}>
    <Typography className="text" variant="h3" component="h1" sx={{m:'auto'}}>
      DASHBOARD
    </Typography>
      <BlogCard />
    </Box>
  );
};

export default Dashboard;
