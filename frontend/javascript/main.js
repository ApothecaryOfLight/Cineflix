/*
Function that acts as the entry-point for the web application.

Upon the window onload event firing, this anonymous function will call get_movies(),
which will begin the application.
*/
window.onload = () => {
  get_movies();
}


/*
Sends a fetch request to the server.

The response will be a list of all available movies, which will then be handed to
compose_scrollables, which will transform the JSON metadata into HTML elements.
*/
function get_movies() {
  //Fetch get_movies from server.
  fetch( ip + '/get_movies',
    {
      method: 'GET'
    }
  ).then( response => response.json() )
  .then( json => {
    //Hand the movie list in JSON format to compose_scrollables.
    compose_scrollables( json );
  });
}


/*
Function to launch a movie. Called when a user selects a movie poster by clicking
on it.

inMovieName: Name of the movie to play.
*/
function launch_movie( inMovieName ) {
  //Show the movie player interface and hide the movie browser interface.
  show_movie_interface();

  //Get a reference to the video player.
  const video_player = document.getElementById("video_player");

  //Set the movie source attribute.
  video_player.src = inMovieName;

  //Start the video playing.
  video_player.play();

  //Add an exit button to the upper-right hand corner of the video player.
  attach_exit_button();
}