const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Artist, Genre} = require("./models/models");
const { reset } = require("nodemon");

// express app
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Artist
// connect to mongodb
const dbURI =
  "mongodb+srv://feydo:feyDo1234@node1.00lrnk3.mongodb.net/artists?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    (result) => app.listen(3000),
    console.log("connect success and listening on port 3000")
  )
  .catch((err) => console.log(err));




  app.get('/artists', function (req, res) {
    let artists = Artist.find({}, function(err, artists){
        if(err){
            console.log(err);
        }
        else {
            res.json(artists);
        }
    });
});

app.get('/genre', function (req, res) {
  let genre = Genre.find({}, function(err, artists){
      if(err){
          console.log(err);
      }
      else {
          res.json(artists);
      }
  });
});


app.post("/genre", async (req, res) => {
  try {
    const genre = new Genre(req.body);
    console.log(genre)
   genre.save();
    res.send(genre)
  } catch (error) {
    res.status(400).send(error);
  }
});


app.post("/artists", async (req, res) => {
    try {
      const artist = new Artist(req.body);
      console.log(artist)
      artist.save();
      res.send(artist)
    } catch (error) {
      res.status(400).send(error);
    }
  });


  app.get("/genre/:id", (req, res) => {
    let id = req.params.id;
    Genre.findById(id).populate('artist')
      .then( result => {
        res.send({result});
        console.log({result})
      })
      .catch( err => {
        console.log(err);
      });
  });




app.get("/artists/:id", (req, res) => {
  let id = req.params.id;
  Artist.findById(id)
    .then( result => {
      res.send({result});
      console.log({result})
    })
    .catch( err => {
      console.log(err);
    });
});

app.delete("/artists/:id", async (req, res) => {
  try {
   const _id = req.params.id;
   const result = await Artist.findByIdAndDelete(_id);
   if(result){
     res.send({
       status: "SUCCESS",
       message: "Artist is Deleted successfully..."
     })
   }else{
     res.send({
       status: "FAILED",
       message: "Artist not Deleted successfully..."
     })
   }
   } catch (error) {
     res.status(400).send(error);
  }
 });
 


 app.put("/artists/:id", async (req, res) => {
  try {
   const _id = req.params.id;
   const result = await Artist.findByIdAndUpdate(_id, {  name: req.body.name, age: req.body.age, followers: req.body.followers});
   if(result){
     res.send({
       status: "SUCCESS",
       message: "Artist is updated successfully..."
      })
      return
      artist.save();
   }else{
     res.send({
       status: "FAILED",
       message: "Artist not updated successfully..."
     })
     return
   }
   } catch (error) {
     res.status(400).send(error);
     return
  }
 });
 