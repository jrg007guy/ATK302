let vid;
function setup() {
  noCanvas();

  vid = createVideo(
    ['assets/PokemonSong.mp4'],
    vidLoad
  );

  vid.size(600, 600);
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}
