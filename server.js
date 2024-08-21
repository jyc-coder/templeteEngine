const express = require("express");
const app = express();

const PORT = 3000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/user", (req, res) => {
  const user = {
    name: "jyc",
    stack: "web developer",
    email: "test1234@gmail.com",
    hobby: ["독서", "음악감상", "게임하기"],
  };
  res.render("user", { user });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
