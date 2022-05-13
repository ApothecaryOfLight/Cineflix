/*
Global object to retain cursor location information.
*/
const mouse_tracking = {
    "last_move": 0,
    x_pos: 0,
    y_pos: 0,
    timer: null
}


/*
Update the timer, signifying that the mouse has recently moved, and display the
exit button.
*/
function check_mouse( mouse_event ) {
    //Update the timer.
    mouse_tracking.last_move = Date.now();

    //Get a reference to the exit button.
    const exit_button = document.getElementById("exit_button");

    //Display the exit button.
    exit_button.style.display = "inline";
}


/*
Update the timer, signifying that the mouse has recently moved, and display the
exit button.
*/
function check_toucher( touch_event ) {
    //Update the timer.
    mouse_tracking.last_move = Date.now();

    //Get a reference to the exit button.
    const exit_button = document.getElementById("exit_button");

    //Display the exit button.
    exit_button.style.display = "inline";
}


/*
Function to be called regularly by the timer.

Will check to see if the mouse has moved recently.

If it has not, this function will hide the exit button.
*/
function is_mouse_gone() {
    //Get the present time.
    const now = Date.now();

    //Compare the present time with the last time the mouse moved.
    //If it has been longer than a set amount of time, then:
    if( now-500 > mouse_tracking.last_move ) {
        //Get a reference to the exit button.
        const exit_button = document.getElementById("exit_button");

        //Hide the exit button.
        exit_button.style.display = "none";
    }
}


/*
Attach mouse events for the exit movie player button.
*/
function attach_exit_button() {
    //Get a reference to the exit button.
    const exit_button = document.getElementById("exit_button");

    //Attach click events to the exit button.
    exit_button.addEventListener( 'click', exit_movie );
    exit_button.addEventListener( 'touchstart', exit_movie );

    //Attach mouse-move events to the window.
    window.addEventListener( 'mousedown', check_mouse );
    window.addEventListener( 'mousemove', check_mouse );
    window.addEventListener( 'touchmove', check_toucher );
    window.addEventListener( 'touchstart', check_toucher );

    //Start a time to track mouse movement.
    mouse_tracking.timer = window.setInterval( is_mouse_gone, 500 );
}


/*
Function to be called upon the exit movie button being clicked.
*/
function exit_movie() {
    //Get a reference to the movie player.
    const video_player = document.getElementById("video_player");

    //Pause the movie.
    video_player.pause();

    //Return to the movie browser interface.
    show_poster_interface();
}