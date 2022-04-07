const express = require("express");
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) =>{
  res.sendFile(path.join(__dirname, "public/index.html"))
})

//Get request to go to the notes page
app.get("/notes", (req, res) => {
  console.log("Is this working?")
  res.sendFile(path.join(__dirname, "public/notes.html"))
});

// Post

// Delete (optional)


//Code for Error Page
app.get("*", (req, res) => res.send("File Not Found"));
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);