const express = require("express");
const mongoose = require("mongoose");
const Artist = require("./models/artists");
const { reset } = require("nodemon");

// express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
