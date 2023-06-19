const express = require('express');
const cors = require("cors");

const app = express();

const PORT =3000;


app.use(express.json())
app.use(cors({origin:true}))

app.post("/authenticate", async(req,res) => {

  const {username} = req.body
  return res.json({username:username,secret:"spaceExploration"});
});

app.listen(PORT, ()=> {
  console.log(`Currently listening on port ${PORT}`)
})


