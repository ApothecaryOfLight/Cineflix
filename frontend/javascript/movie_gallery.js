//Global array to retain posters.
const posters = [];


/*
Function to call when the left scroll button on a row of movies is clicked.
*/
function scroll_left( inRowId ) {
    //Get a reference to the scrollable to which this button is attached.
    const scrollable_name = "scrollable_" + inRowId;
    const scrollable = document.getElementById( scrollable_name );

    /*Get the width of this row.*/
    const computed = window.getComputedStyle( scrollable );
    const width = computed.getPropertyValue( 'width' );
    let scrollable_width = computed.getPropertyValue( 'width' );
    const scrollable_width_num = Number( scrollable_width.substring(0, scrollable_width.length-2 ) );

    /*If the scrollable is scrolled all the way to the left, simply return.*/
    if( scrollable_width_num < window.innerWidth ) {
        return;
    }

    //Otherwise, apply a further scroll to the left.
    posters[inRowId].scroll_pos += window.innerWidth - 150;
    if( posters[inRowId].scroll_pos >= 0 ) {
        posters[inRowId].scroll_pos = 0;
    }

    //Ensure that the scroll to the new position will be animated.
    const trans = "translateX(" + posters[inRowId].scroll_pos + "px)";
    scrollable.style.transform = trans;
}


/*
Function to call when the right scroll button on a row of movies is clicked.
*/
function scroll_right( inRowId ) {
    //Get the row to which this button is attached.
    const scrollable_name = "scrollable_" + inRowId;
    const scrollable = document.getElementById( scrollable_name );
    posters[inRowId].scroll_pos -= window.innerWidth - 150;

    //Get the width of this row.
    const computed = window.getComputedStyle( scrollable );
    const width = computed.getPropertyValue( 'width' );
    const margin_x = posters[inRowId].scroll_pos*-1;
    const window_width = window.innerWidth;
    let scrollable_width = computed.getPropertyValue( 'width' );
    const scrollable_width_num = Number( scrollable_width.substring(0, scrollable_width.length-2 ) );

    //If this row is scrolled all the way to the right, simply return.
    if( scrollable_width_num < window.innerWidth ) {
        return;
    }

    //Otherwise, get the pixel value, but be sure to remove the suffixed "px"
    //so that the value can be processed as a number.
    scrollable_width = scrollable_width.slice(0,-2);
     const max_margin_x = Math.min(
        window_width - scrollable_width,
        scrollable_width - 180
    );

    //Calculate the new position and apply the scroll as an animation.
    if( margin_x + window_width > scrollable_width ) {
        posters[inRowId].scroll_pos = max_margin_x - 180;
    }
    const trans = "translateX(" + posters[inRowId].scroll_pos + "px)";
    scrollable.style.transform = trans;
}


/*
Create the HTML element for the left scroll button.
*/
function composeLeftScroll( inRowId ) {
    let dom = "<div class=\"left_scroll\""
    dom += " onclick=\"scroll_left(\'" + inRowId + "\');\" ";
    dom += ">";
    dom += "<div class=\"left_scroll_container noselect\">";
    dom += "\<";
    dom += "</div>";
    dom += "</div>";
    return dom;
}


/*
Create the HTML element for the right scroll button.
*/
function composeRightScroll( inRowId ) {
    let dom = "<div class=\"right_scroll\""
    dom += " onclick=\"scroll_right(\'" + inRowId + "\');\" ";
    dom += ">";
    dom += "<div class=\"right_scroll_container noselect\">";
    dom +="\>";
    dom += "</div>";
    dom += "</div>";
    return dom;
}


/*
Create the HTML element for the larger version of a movie poster, to be displayed
when the user moves their mouse cursor over a given poster.
*/
function composeExpandable( inRowId, inPos, inMovieData ) {
    let dom = "<div class=\"expandable_poster\"";
    dom += " id=\"" + inRowId + "_" + inPos + "\" ";
    dom += ">";
    dom += "<img src=\"" + inMovieData.poster + "\" " +
        "class=\'expandable_image\' " +
        "onclick=\"launch_movie(\'" + inMovieData.src + "\');\"" +
        "/>";
    dom += "<br>";
    dom += "<br>" + inMovieData.name +
        "<br>" + inMovieData.genre + " " + inMovieData.year +
        "<br>" + inMovieData.description + "<br><br>";
    dom += "</div>";
    return dom;
}


/*
Function to be called when the user moves their mouse cursor over a given poster.
*/
function mouseOverPoster( inRowID, inPos ) {
    //Get the name of the poster that has been mouse overed.
    const expandable_name = inRowID + "_" + inPos;
    const expandable = document.getElementById( expandable_name );

    //Display the exapndable poster.
    expandable.style.display = "block";
    expandable.style.width = "300px";
    expandable.style.height = "auto";

    //Attach an event to listen for the mouse leaving the expanded poster.
    expandable.addEventListener( "mouseleave", (event) =>  {
        const expandable = document.getElementById( expandable_name );
        expandable.style.display = "none";
    });
}


/*
Filter the list of movies for specific values in the metadata such as genre or topic.

inScrollable: List of movies.

type: Key of values to check.

value: Desired value to return as true.
*/
function filter_scrollable( inScrollable, type, value ) {
    //Create an array that will store the desired return elements.
    const return_obj = [];
    //Iterate through the full list of movies.
    for( const key in inScrollable ) {
        //If this element has the correct value for the sought after key, then:
        if( inScrollable[key][type] == value ) {
            //Add this element to the return array.
            return_obj[key] = inScrollable[key];
        }
    }
    //Return the array of desired elements..
    return return_obj;
}


/*
Build the rows of the movie gallery interface.
*/
function compose_scrollables( inScrollables ) {
  compose_scrollable( 1, filter_scrollable( inScrollables, "genre", "Drama" ), "Dramas" );
  compose_scrollable( 2, filter_scrollable( inScrollables, "genre", "Comedy" ), "Comedies" );
  compose_scrollable( 3, filter_scrollable( inScrollables, "genre", "Horror" ), "Horror" );
  compose_scrollable( 4, filter_scrollable( inScrollables, "genre", "Science Fiction" ), "Science Fiction" );
  compose_scrollable( 5, filter_scrollable( inScrollables, "genre", "Fantasy" ), "Fantasy" );
  compose_scrollable( 6, filter_scrollable( inScrollables, "topic", "Charlie Chaplin" ), "Charlie Chaplin" );
  compose_scrollable( 7, filter_scrollable( inScrollables, "topic", "Horror-Comedy" ), "Horror-Comedies" );
  compose_scrollable( 8, filter_scrollable( inScrollables, "topic", "Sherlock Holmes" ), "Sherlock Holmes" );
}


/*
Build the HTML elements that make up a row of movies in the movie browser.
*/
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
  for( let key in inScrollables ) {
    if( key != "scroll_num" && key != "scroll_pos" ) {
      const item = inScrollables[key];

      dom += "<div class=\"image_container\"" +
      "onclick=\"launch_movie(\'" +
      item.src +
      "\');\"" +
      "onmouseover=\"mouseOverPoster(" +
      inRowID + ", " + key + ")\" " +
      ">";

      dom += composeExpandable( inRowID, key, item );

      dom += "<img src=\"" + item.poster + "\"" +
      "class=\'image\' " +
      "/>";
      dom += "</div>";
    }
  }
  dom += "</div>";
  dom += composeRightScroll( inRowID );
  dom += "</div>";
  const cont = document.getElementById("scrollables_container");
  cont.innerHTML = cont.innerHTML + "<br>" + dom;
}