/*
 Importatoins des packages importants
*/
const express = require("express");
require("dotenv").config();
/*
 Mes variables
*/
const app = express();
const PORT = process.env.PORT;
/*
 Home page
*/
app.get("/", (req, res) => {
  res.send("welcome in BBC news... yes");
});
/*
 Server
*/
app.listen(PORT, () => {
  console.log(`Server is runing on port 🚀 http://localhost:${PORT}`);
});
