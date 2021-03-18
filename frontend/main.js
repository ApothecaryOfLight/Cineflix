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
  attach_exit_button();
}

const mouse_tracking = {
  "last_move": 0,
  x_pos: 0,
  y_pos: 0,
  timer: null
}

function check_mouse( mouse_event ) {
//console.dir( mouse_event );
/*Rememder screen_x/y, test against screen dimensions,
if inside screen, wait longer to hide X. */
  mouse_tracking.last_move = Date.now();
  const exit_button = document.getElementById("exit_button");
  exit_button.style.display = "inline";
}
function check_toucher( touch_event ) {
//console.dir( touch_event );
  mouse_tracking.last_move = Date.now();
  const exit_button = document.getElementById("exit_button");
  exit_button.style.display = "inline";
}

function is_mouse_gone() {
  const now = Date.now();
  if( now-500 > mouse_tracking.last_move ) {
    const exit_button = document.getElementById("exit_button");
    exit_button.style.display = "none";
  }
}

function attach_exit_button() {
  const exit_button = document.getElementById("exit_button");
  exit_button.addEventListener( 'click', exit_movie );
  exit_button.addEventListener( 'touchstart', exit_movie );

  window.addEventListener( 'mousedown', check_mouse );
  window.addEventListener( 'mousemove', check_mouse );
  window.addEventListener( 'touchmove', check_toucher );
  window.addEventListener( 'touchstart', check_toucher );

  mouse_tracking.timer = window.setInterval( is_mouse_gone, 500 );
}

function exit_movie() {
  const video_container = document.getElementById("video_container");
  const video_player = document.getElementById("video_player");
  video_container.style.display = "none";
  video_player.pause();
}

function compose_scrollable( inScrollables ) {
  let dom = "";
  inScrollables.forEach( (item) => {
    dom += "<div class=\"image_container\">";
    dom += "<div class=\"expandable_poster\"></div>";
    dom += "<img src=\"/images/" + item.picture + "\" " +
    "class=\'image\' " +
    "onclick=\"launch_movie(\'" + item.file_name + "\');\"" +
    "/>";
    dom += "</div>";
  });
  const cont = document.getElementById("scrollables_container");
  cont.innerHTML = dom;
  const contB = document.getElementById("scrollables_containerB");
  contB.innerHTML = dom;
}
