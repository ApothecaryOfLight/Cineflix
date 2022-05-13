/*Provides basic server functionality.*/
const express = require("express");
const app = express();

/*Provides filesystem access.*/
const fs = require("fs");

/*Provides cross-origin support.*/
const cors = require("cors");
app.use( cors() );


/*
Function to load the metadata of each movie from this server.

Meanwhile, the actual data that makes up each movie (the audio and video) are stored
on the AWS cloud. You can store them wherever you like, just make sure to set the file
location in the metadata files in the movies folder of this repo.
*/
function load_movie_data() {
  //Get a list of files in the movie directory.
  //Inside each file is a JSON style object that details what and where the movie is.
  fs.readdir( './movies/', async (error,files) => {
    const object_array = [];

    //Iterate over each file
    files.forEach( (file) => {
      //If the file ends in txt it is metadata.
      if( file.slice(-3) == "txt" ) {
        //Read the metadata as JSON
        fs.readFile( './movies/' + file, 'utf8', async (error, data) => {
          try{
            const out_obj = JSON.parse( data );
            const file_name = file.slice( 0, -4 );
            out_obj.file_name = file_name;
            object_array.push( out_obj );
            
            //If all the files have been processed, launch
            if( object_array.length == files.length ) {
              launch_routes( object_array );
            }
          } catch( error ) {
            console.error( error );
          }
        });
      }
    });
  });
}


/*
Set up the get_movies request.

movies: An array containing objects, each object being the metadata for 1 movie.
*/
function launch_routes( movies ) {
  app.get( "/get_movies", (req,res) => {
    res.send( movies );
  });
}


/*
Launch either supporting https (secure, certificate based, for prod) or http (unsecure,
no certificates, for dev).
*/
if( process.argv[2] == "https" ) {
  const https = require('https');
  const privateKey = fs.readFileSync('../privkey.pem');
  const certificate = fs.readFileSync('../fullchain.pem');
  const credentials = {key: privateKey, cert: certificate};
  const server = https.createServer( credentials, app );

  server.listen( 3000, () => {
    console.log( "Listening on port 3000, secure for prod." );
    load_movie_data();
  });
} else if( process.argv[2] == "http" ) {
  app.listen( 3000 );
  console.log( "Listening on port 3000, unsecured for dev." );
  load_movie_data();
}
