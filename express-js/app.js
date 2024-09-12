const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.json({
  //     nama: "Ubay Dillah",
  //     noHp: 12121,
  //   });

  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

app.get("/product/:id", (req, res) => {
  res.send(
    "Product ID : " + req.params.id + "<br> Category : " + req.query.category
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
