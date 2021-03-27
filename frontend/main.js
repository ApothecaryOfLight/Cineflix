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
    compose_scrollables( json );
  });
}

function get_image( image_name ) {
  const myimage = document.getElementById("myimage");
  myimage.src = "/images/" + image_name + ".jpg";
}

function show_movie_interface() {
  const posters = document.getElementById("scrollables_container");
  const movie = document.getElementById("video_container");
  const title = document.getElementById("title");
  title.style.display = "none";
  posters.style.display = "none";
  movie.style.display = "block";
}

function show_poster_interface() {
  const posters = document.getElementById("scrollables_container");
  const movie = document.getElementById("video_container");
  const title = document.getElementById("title");
  title.style.display = "block";
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
  const scrollable_name = "scrollable_" + inRowId;
  const scrollable = document.getElementById( scrollable_name );
  posters[inRowId].scroll_pos -= window.innerWidth;

  const computed = window.getComputedStyle( scrollable );
  const width = computed.getPropertyValue( 'width' );

  const margin_x = posters[inRowId].scroll_pos*-1;
  const window_width = window.innerWidth;
  let scrollable_width = computed.getPropertyValue( 'width' );
  scrollable_width = scrollable_width.slice(0,-2);
  const max_margin_x = Math.min(
    window_width - scrollable_width,
    scrollable_width - 180
  );

  //TODO: Calculate 180 dynamically.
  if( margin_x + window_width > scrollable_width ) {
    posters[inRowId].scroll_pos = max_margin_x - 180;
  }

  const trans = "translateX(" + posters[inRowId].scroll_pos + "px)";
  scrollable.style.transform = trans;
}

//TODO: Set scroll bars dynamically.
function adjustScrollbars( inRowID ) {
  const scrollables_dom = document.getElementById("scrollables_container");
  const scrollables = window.getComputedStyle( scrollables_dom );
  const height = scrollables.getPropertyValue('height');
  //This is 0 because it's being checked before the element
  //is inflated. Run an adjustment function after the rest
  // of the dom is composed and rendered
}

function composeLeftScroll( inRowId ) {
  let dom = "<div class=\"left_scroll\""
  dom += " onclick=\"scroll_left(\'" + inRowId + "\');\" ";
  dom += ">";
  dom += "<div class=\"left_scroll_container\">";
  dom += "\<";
  dom += "</div>";
  dom += "</div>";
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
  let dom = "<div class=\"expandable_poster\"";
  dom += " id=\"" + inRowId + "_" + inMovieData.file_name + "\" ";
  dom += ">";
  dom += "<img src=\"/images/" + inMovieData.picture + "\" " +
  "class=\'expandable_image\' " +
  "onclick=\"launch_movie(\'" + inMovieData.file_name + "\');\"" +
  "/>";
  dom += "<br>";
  dom += "<br>" + inMovieData.name +
    "<br>" + inMovieData.genre + " " + inMovieData.year +
    "<br>" + inMovieData.description + "<br><br>";
  dom += "</div>";
  return dom;
}

function mouseOverPoster( inRowID, inPos, file_name ) {
  const expandable_name = inRowID + "_" + file_name;
  const expandable = document.getElementById( expandable_name );
  expandable.style.display = "block";
  expandable.style.width = "300px";
  expandable.style.height = "auto";
  expandable.addEventListener( "mouseleave", (event) =>  {
    const expandable = document.getElementById( expandable_name );
    expandable.style.display = "none";
  });
}

//function composeScrollableClass

function filter_scrollable( inScrollable, genre ) {
  const return_obj = [];
  for( const key in inScrollable ) {
    if( inScrollable[key].genre == genre ) {
      return_obj[key] = inScrollable[key];
    }
  }
  return return_obj;
}

function compose_scrollables( inScrollables ) {
  console.dir( inScrollables );
  compose_scrollable( 1, inScrollables, "Movies" );
  compose_scrollable( 2, filter_scrollable( inScrollables, "Comedy" ), "Comedy" );
  compose_scrollable( 3, filter_scrollable( inScrollables, "Horror" ), "Horror" );
  compose_scrollable( 4, filter_scrollable( inScrollables, "Western" ), "Western" );
}

function compose_scrollable( inRowID, inScrollables, title ) {
  posters[inRowID] = inScrollables;
  posters[inRowID].scroll_num = 0;
  posters[inRowID].scroll_pos = 0;

  let dom = "<div class=\"scrollable_title\">" + title + "</div><br>";
  dom += "<div class=\"scrollable_container\">";
  dom += composeLeftScroll( inRowID );
  dom += "<div id=\"scrollable_" + inRowID + "\"";
  dom += "class=\"scrollable\"";
  dom += ">";
  inScrollables.forEach( (item) => {
    dom += "<div class=\"image_container\"" +
    "onclick=\"launch_movie(\'" + item.file_name + "\');\"" +
    "onmouseover=\"mouseOverPoster(" +
    inRowID + ", " +  0 + ", \'" + item.file_name + "\')\" " +
    ">";

    dom += composeExpandable( inRowID, 0, item );

    dom += "<img src=\"/images/" + item.picture + "\" " +
    "class=\'image\' " +
    "/>";
    dom += "</div>";
  });
  dom += "</div>";
  dom += composeRightScroll( inRowID );
  dom += "</div>";
  const cont = document.getElementById("scrollables_container");
  cont.innerHTML = cont.innerHTML + "<br>" + dom;

  adjustScrollbars( inRowID );
}


