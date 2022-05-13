/*
This function hides the movie browsing interface (scrollables_container) and instead
displays the movie interface (where the movie plays).
*/
function show_movie_interface() {
    //Get references to the relevant HTML elements.
    const posters = document.getElementById("scrollables_container");
    const movie = document.getElementById("video_container");
    const title = document.getElementById("title");
  
    //Set the elements no needed to be not displayed (none) and set the movie player
    //to be displayed (block).
    title.style.display = "none";
    posters.style.display = "none";
    movie.style.display = "block";
  
    //Ensure that the browser is scrolled to the movie player.
    movie.scrollIntoView({
      block: 'center'
    })
  }
  
  
  /*
  Function to hide the movie player and to show the movie browser interface.
  */
  function show_poster_interface() {
    //Get references to the relevant HTML elements.
    const posters = document.getElementById("scrollables_container");
    const movie = document.getElementById("video_container");
    const title = document.getElementById("title");
  
    //Set the movie player to be hidden (none) and the title and posters to
    //be displayed (block and flex, respectively).
    title.style.display = "block";
    movie.style.display = "none";
    posters.style.display = "flex";
  }