const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

// Set Static Assets Folder
const staticFolderPath = path.join(__dirname, "../public");
app.use(express.static(staticFolderPath));

// Set Template Engine and Views Folder
const viewsFolderPath = path.join(__dirname, "../templates/views");
const partialsFolderPath = path.join(__dirname, "../template/partials");
app.set("view engine", "hbs");
app.set("views", viewsFolderPath);
hbs.registerPartials(partialsFolderPath);

app.get("", (req, res) => {
  res.render("index");
});

app.listen(3300, () => {
  console.log("Listening on PORT 3300...");
});
