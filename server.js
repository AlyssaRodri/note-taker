const express = require("express");
const fs = require("fs");
const uuid = require("uuid");
const path = require("path");
const { text } = require("express");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

//Middleware for parsing data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//get request for the main page
app.get("/", (req, res) =>{
  res.sendFile(path.join(__dirname, "public/index.html"))
})

//Get request to go to the notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"))
});
//get request for our API
app.get("/api/notes", (req, res) =>{
  res.sendFile(path.join(__dirname, "db/db.json"))
})


// Post request
app.post("/api/notes", (res, req) =>{
  console.log("app.post for api/notes")

  let newNote = {
    title: res.body.title,
    text: res.body.text,
    id: uuid.v4()
  };

  console.log(newNote)

  let dataBase = fs.readFileSync("./db/db.json")
  let parsedDB = JSON.parse(dataBase)

  parsedDB.push(newNote);
  console.log(parsedDB)

  fs.writeFileSync("db/db.json", JSON.stringify(parsedDB))
  return req.json(newNote)

})
// Delete (optional)


//Code for Error Page
app.get("*", (req, res) => res.send("File Not Found"));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);