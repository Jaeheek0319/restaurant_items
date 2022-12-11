const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;
const path = require("path");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("********", __dirname);

//write routes
app.get("/pizza", async (req, res) => {
  console.log("Hitting");
  res.sendFile(path.join(__dirname, "/public/pizza.jpeg"));
});

app.get("/taco", async (req, res) => {
  res.sendFile(path.join(__dirname, "/public/taco.jpeg"));
});

app.get("/sushi", async (req, res) => {
  res.sendFile(path.join(__dirname, "/public/sushi.jpeg"));
});

app.get("/food/:doggy", (req, res) => {
  const type = req.params.doggy;

  switch (type) {
    case "pizza":
        res.sendFile(path.join(__dirname, "/public/pizza.jpeg"));
        break;
    case "taco":
        res.sendFile(path.join(__dirname, "/public/taco.jpeg"));
        break;
    case "sushi":
        res.sendFile(path.join(__dirname, "/public/sushi.jpeg"));
        break;
    default:
        break;
  }
});

app.get("/food/:name/:description", (req, res) => {
  const name = req.params.name;
  const description = req.params.description;
  const foodArray = [];

  const foodObject = {name, description}

  foodArray.push(foodObject);

  res.json(foodArray);
});

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT} ...`);
});
