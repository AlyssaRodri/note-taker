const express = require("express");
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3000;

// Insert global middleware here
// app.use(clog);

// Allow for static files to be accessed
app.use(express.static("public"));

app.get("/", (req, res) =>{
  res.sendFile(path.join(__dirname, "public/index.html"))
})

app.get("/notes", (req, res) => {
  console.log("Is this working?")
  res.sendFile(path.join(__dirname, "public/notes.html"))
})

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Set up extra routing files
// app.use('/api', require('./routes/api/index.js'));
// app.use('/', require('./routes/html/index.js'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);