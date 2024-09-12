const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// menggunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  //   res.sendFile("./index.html", { root: __dirname });
  const mahasiswa = [
    {
      nama: "Ubay Dillah",
      email: "ubaydillah@gmail.com",
    },
    {
      nama: "Adrien Mozatrya",
      email: "adriengaming123@gmail.com",
    },
    {
      nama: "Ikhsan gaming",
      email: "nurikhsan@gmail.com",
    },
  ];

  res.render("index", {
    layout: "layouts/main-layout",
    nama: "Ubay Dillah",
    title: "Home",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  //   res.send("About");
  res.render("about", {
    layout: "layouts/main-layout",
    title: "about",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", { layout: "layouts/main-layout", title: "contact" });
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
