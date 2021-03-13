window.onload = () => {
  get_movies();
}

function get_movies() {
  fetch( 'http://54.218.114.68:3000/get_movies',
    {
      method: 'GET'
    }
  ).then( response => response.json() )
  .then( json => {
    console.dir( json );
    compose_scrollable( json );
  });
}

function get_image( image_name ) {
  const myimage = document.getElementById("myimage");
  myimage.src = "/images/" + image_name + ".jpg";
}

function launch_movie( inMovieName ) {
  const video_container = document.getElementById("video_container");
  const video_player = document.getElementById("video_player");
  video_container.style.display = "block";
  video_player.src = 'http://54.218.114.68:3000/film/' + inMovieName;
  video_player.play();
}

function compose_scrollable( inScrollables ) {
  let dom = "";
  inScrollables.forEach( (item) => {
    dom += "<img src=\"/images/" + item.file_name + ".jpg\" " +
    "class=\'image\' " +
    "onclick=\"launch_movie(\'" + item.file_name + "\');\"" +
    "/>";
  });
  const cont = document.getElementById("scrollables_container");
  cont.innerHTML = dom;
}
