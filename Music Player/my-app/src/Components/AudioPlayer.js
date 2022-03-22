import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';


export const AudioPlayer = ({
  title,
  artist,
  avatar,
  duration,
  trackProgress,
  onChangeTrackProgress,
  onPlayPause,
  audioSrc,
  isPlaying,
  nextTrack,
  prevTrack,
}) => {
  const currentProgress = (trackProgress / duration) * 100;
  const trackProgressStyling = `linear-gradient(to right, #ffffff ${currentProgress}%, grey ${currentProgress}%)`;
  console.log(audioSrc);
  var audioElement = new Audio(audioSrc);

  console.log(audioElement.duration)


  return (
    <div className="wrapper">
      <div className="top-bar">
        <i className="material-icons">expand_more</i>
        <span>Now Playing</span>
        <i className="material-icons">more_horiz</i>
      </div>
      <div className="img-area">
        <img src={avatar} alt="" />
      </div>
      <div className="song-details">
        <p className="name">{title}</p>
        <p className="artist">{artist}</p>
      </div>
      <div className="progress-area">
        <div className="progress-bar">
          <audio id="main-audio" src={audioSrc}></audio>
        </div>
        <div className="song-timer">
          <span className="current-time">0:00</span>
          <span className="max-duration">0:00</span>
        </div>
      </div>
      <div className="controls">
        <RepeatIcon id="repeat-plist" className="material-icons" title="Playlist looped"/>
        <SkipPreviousIcon id="prev" className="material-icons" />
        <div className="play-pause">
        <PlayArrowIcon className="material-icons play"  onClick={onPlayPause}>play</PlayArrowIcon>
        </div>
        <SkipNextIcon id="next" className="material-icons"  >skip_next</SkipNextIcon>
        <QueueMusicIcon id="more-music" className="material-icons">queue_music</QueueMusicIcon>
      </div>
      </div>
  )
}