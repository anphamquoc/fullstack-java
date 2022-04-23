const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");

// setup multer for file upload
var storage = multer.diskStorage({
  destination: "./../public/assets/images/products",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());
// serving front end build files
app.use(express.static(__dirname + "/../build"));

// route for file upload
app.post("/api/uploadfile", upload.single("myFile"), (req, res, next) => {
  console.log(req.file.originalname + " file successfully uploaded !!");
  res.sendStatus(200);
});

app.listen(5000, () => console.log("Listening on port 5000"));
