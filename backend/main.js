const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
app.use( cors() );


function load_movie_data() {
  //Get a list of files in the movie directory
  fs.readdir( './movies/', async (error,files) => {
    const object_array = [];
    //Iterate over each file
    files.forEach( (file) => {
      //If the file ends in txt it is metadata.
      if( file.slice(-3) == "txt" ) {
        //Read the metadata as JSON
        fs.readFile( './movies/' + file, 'utf8', async (error, data) => {
          object_array.push( JSON.parse( data ) );
          //If all the files have been iterated over, launch
          if( object_array.length == files.length/3 ) {
            launch_routes( object_array );
          }
        });
      }
    });
  });
}

function launch_routes( movies ) {
  app.get( "/get_movies", (req,res) => {
    res.send( movies );
  });
}

load_movie_data();


app.get( "/goat", (req,res) => {
  //  Get the range requested by the client.
  //  If there is no range, send an error to the client,
  //informing the client that the request is bad.
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  //  Set the path to the video
  const videoPath = "movies/the_goat.mp4";

  //  Get the file size of the video.
  const videoSize = fs.statSync("movies/the_goat.mp4").size;

  //  Create a chunk size equal to 10 to the power of 6
  const CHUNK_SIZE = 10 ** 6;

  //  Use a regex literal (//) to replace all (g) non-digits (D)
  //with empty string ("")
  //  Use Number to convert (cast) the returned value to a number.
  const start = Number(
    range.replace( /\D/g, "" )
  );

  //  Calculate the end based on which number is smaller,
  //either the start position plus a megabyte,
  //or the video size minus 1.
  const end = Math.min(
    start + CHUNK_SIZE,
    videoSize - 1
  );

  //  Combine end and start plus 1 to arrive at length.
  const contentLength = end - start + 1;

  //  Compose the header information.
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  //  Set the response status code and header information.
  //  206 tells the client that the information is  partial content.
  res.writeHead( 206, headers );

  //  Create the readable stream based on the file path and range.
  const videoStream = fs.createReadStream(
    videoPath,
    {
      start,
      end
    }
  );

  //  Set the readable stream's destination as the response.
  videoStream.pipe(res);
});

app.listen( 3000, () => {
  console.log( "Listening on port 3000." );
});
