window.onload = () => {
  const play = document.getElementById("play");
  play.addEventListener( 'click', (click) => {
    const video_container = document.getElementById("video_container");
    video_container.style.display = "block";

    const video = document.getElementById("testing_video");
    video.play();
  });

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
    json.forEach( movie => {
      console.dir( movie );
      get_image( movie.file_name );
    });
  });
}

function get_image( image_name ) {
  const myimage = document.getElementById("myimage");
  myimage.src = "/images/" + image_name + ".jpg";
}
