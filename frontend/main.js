window.onload = () => {
  const play = document.getElementById("play");
  play.addEventListener( 'click', (click) => {
    const video_container = document.getElementById("video_container");
    video_container.style.display = "block";

    const video = document.getElementById("testing_video");
    video.play();
  });
}
