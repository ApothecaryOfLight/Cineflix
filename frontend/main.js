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
    compose_scrollable( 1, json );
  });
}

function get_image( image_name ) {
  const myimage = document.getElementById("myimage");
  myimage.src = "/images/" + image_name + ".jpg";
}

function show_movie_interface() {
  const posters = document.getElementById("scrollables_container");
  const movie = document.getElementById("video_container");
  posters.style.display = "none";
  movie.style.display = "block";
}

function show_poster_interface() {
  const posters = document.getElementById("scrollables_container");
  const movie = document.getElementById("video_container");
  movie.style.display = "none";
  posters.style.display = "flex";
}

function launch_movie( inMovieName ) {
  show_movie_interface();
  const video_player = document.getElementById("video_player");
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
//  const video_container = document.getElementById("video_container");
  const video_player = document.getElementById("video_player");
//  video_container.style.display = "none";
  video_player.pause();
  show_poster_interface();
}

const posters = [];

function scroll_left( inRowId ) {
  console.log( "scroll_left: " + inRowId );
  const scrollable_name = "scrollable_" + inRowId;
  const scrollable = document.getElementById( scrollable_name );
  posters[inRowId].scroll_pos += window.innerWidth;
  if( posters[inRowId].scroll_pos >= 0 ) {
    posters[inRowId].scroll_pos = 0;
  }
  const trans = "translateX(" + posters[inRowId].scroll_pos + "px)";
  scrollable.style.transform = trans;
}

function scroll_right( inRowId ) {
  console.log( "scroll_right: " + inRowId );
  const scrollable_name = "scrollable_" + inRowId;
  const scrollable = document.getElementById( scrollable_name );
  posters[inRowId].scroll_pos -= window.innerWidth;

  const computed = window.getComputedStyle( scrollable );
  const width = computed.getPropertyValue( 'width' );

  const margin_x = posters[inRowId].scroll_pos*-1;
  const window_width = window.innerWidth;
  let scrollable_width = computed.getPropertyValue( 'width' );
  scrollable_width = scrollable_width.slice(0,-2);
  const max_margin_x = window_width - scrollable_width;

  //TODO: Calculate 80 dynamically.
  if( margin_x + window_width > scrollable_width ) {
    posters[inRowId].scroll_pos = max_margin_x - 80;
  }

  const trans = "translateX(" + posters[inRowId].scroll_pos + "px)";
  scrollable.style.transform = trans;
}

function adjustScrollbars() {
  const scrollables_dom = document.getElementById("scrollables_container");
  const scrollables = window.getComputedStyle( scrollables_dom );
console.dir( scrollables );
  const height = scrollables.getPropertyValue('height');
  console.log( height );
}

function composeLeftScroll( inRowId ) {
  let dom = "<div class=\"left_scroll\""
  dom += " onclick=\"scroll_left(\'" + inRowId + "\');\" ";
  dom += ">";
  dom += "<div class=\"left_scroll_container\">";
  dom += "\<";
  dom += "</div>";
  dom += "</div>";
  //This is 0 because it's being checked before the element
  //is inflated. Run an adjustment function after the rest
  // of the dom is composed and rendered

  return dom;
}
function composeRightScroll( inRowId ) {
  let dom = "<div class=\"right_scroll\""
  dom += " onclick=\"scroll_right(\'" + inRowId + "\');\" ";
  dom += ">";
  dom += "<div class=\"right_scroll_container\">";
  dom +="\>";
  dom += "</div>";
  dom += "</div>";
  return dom;
}
function composePoster( inRowId, inPos, inMovieData ) {
  
}
function composeExpandable( inRowId, inPos, inMovieData ) {
  
}

//function composeScrollableClass

function compose_scrollable( inRowID, inScrollables ) {
  posters[inRowID] = inScrollables;
  posters[inRowID].scroll_num = 0;
  posters[inRowID].scroll_pos = 0;

  let dom = composeLeftScroll( inRowID );
  dom += "<div id=\"scrollable_" + inRowID + "\"";
  dom += "class=\"scrollable\"";
  dom += ">";
  inScrollables.forEach( (item) => {
    dom += "<div class=\"image_container\">";
    dom += "<div class=\"expandable_poster\"></div>";
    dom += "<img src=\"/images/" + item.picture + "\" " +
    "class=\'image\' " +
    "onclick=\"launch_movie(\'" + item.file_name + "\');\"" +
    "/>";
    dom += "</div>";
  });
  dom += "</div>";
//  dom += "<div class=\"right_scroll\"></div>";
  dom += composeRightScroll( inRowID );
  const cont = document.getElementById("scrollables_container");
  cont.innerHTML = dom;
/*  const contB = document.getElementById("scrollables_containerB");
  contB.innerHTML = dom;*/

  adjustScrollbars();
}


