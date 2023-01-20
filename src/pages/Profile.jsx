import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import faruk from "../assets/faruk.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="250" image={faruk} alt="faruk" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Faruk
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +2 Jahre Erfahrung in der IT und 1 Jahr ein erfahrener
              Front-End-Entwickler, interessiert am Schreiben von Codes,
              erfahren in der Entwicklung komplexer Lösungen, Erstellen
              reaktionsschneller Designs, starkes kreatives Denkvermögen, hohe
              Energie und Integrität. Früher habe ich etwa 14 Jahre als Richter
              gearbeitet. Ich habe an verschiedenen Gerichten gearbeitet.
              Während ich tätig war, habe ich Urteil im National Judiciary
              Informatik System (UYAP) geschrieben. Dank dieser Arbeit wurden
              viele Softskill gesammelt.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Profile;
