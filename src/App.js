import React from "react";
import { Router, Link } from "@reach/router";
import { ThemeProvider } from "styled-components";
import { withSize } from "react-sizeme";
import produce from "immer";

import { MeasuredFlex } from "./MeasuredComps/MeasuredFlex";
import { Flex100 } from "./RebassComps/Flex100";
import { theme } from "./RebassComps/theme";
import "./App.css";
import { Dashboard } from "./Dashboard/Dashboard";
import { Home } from "./Home/Home";
import EpisodeList from "./modules/EpisodeList/EpisodeList";

const ipAddress = window ? window.location.host : "IP sniffing error!";

export function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

export function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m > 9 ? m : h ? "0" + m : m || "0", s > 9 ? s : "0" + s]
    .filter(a => a)
    .join(":");
}

const initialState = {
  episodeLink: "",
  episodeInfo: "",
  playerStatus: "init",
  playerVisibility: "isClosed",
  currentPlayingIndex: null,
  currentTime: 0,
  displayTime: 0,
  aduioDuration: null,
  rawAudioDuration: 15,
  audioToPlay: [`http://${ipAddress}/audio/openfloor.mp3`],
  playStatus: "PLAYING",
  imageUrl:
    "https://pbcdn1.podbean.com/imglogo/dir-logo/383865/383865_300x300.jpeg",
  soundLabel: "",
  headerPosition: { bottom: 55 }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectAndPlayMedia = this.handleSelectAndPlayMedia.bind(this);
    this.handlePlayMedia = this.handlePlayMedia.bind(this);
    this.handlePlayerToggle = this.handlePlayerToggle.bind(this);
    this.handleSeekForward = this.handleSeekForward.bind(this);
    this.handleSeekBackward = this.handleSeekBackward.bind(this);
    this.handleIncreasePlayback = this.handleIncreasePlayback.bind(this);
    this.handleDecreasePlayback = this.handleDecreasePlayback.bind(this);
    this.getH2Position = this.getH2Position.bind(this);
    this.getPodcastPlayerDimensions = this.getPodcastPlayerDimensions.bind(
      this
    );
    this.handleChangeVolume = this.handleChangeVolume.bind(this);
    this.handleScrubbing = this.handleScrubbing.bind(this);

    this.audioRef = React.createRef();

    this.state = {
      audioToPlay: initialState.audioToPlay,
      audioDuration: initialState.aduioDuration,
      rawAudioDuration: initialState.rawAudioDuration,
      currentTime: initialState.currentTime,
      displayTime: initialState.displayTime,
      episodeLink: initialState.episodeLink,
      episodeInfo: initialState.episodeInfo,
      playerStatus: initialState.playerStatus,
      playerVisibility: initialState.playerVisibility,
      currentPlayingIndex: initialState.currentPlayingIndex,
      imageUrl: initialState.imageUrl,
      loadedComp: null,
      headerPosition: initialState.headerPosition
    };
  }

  getH2Position(arg) {
    const thingToReturn = typeof arg.bottom === "number" ? arg : "Error!";
    this.setState((prevProps, prevState) => ({
      headerPosition: thingToReturn
    }));
  }

  getPodcastPlayerDimensions({ playerHeight, playerWidth }) {
    this.setState({ playerHeight, playerWidth });
  }

  handleSelectAndPlayMedia(mp3Url, event) {
    const mediaQueue = (state, props) => {
      return produce(state, draft => {
        draft.audioToPlay.unshift(mp3Url);
      });
    };
    this.setState(mediaQueue);
  }

  handlePlayerToggle() {
    this.setState(prevState => ({
      playerVisibility:
        prevState.playerVisibility === "isOpen" ? "isClosed" : "isOpen"
    }));
  }

  handlePlayMedia(event) {
    if (this.state.playerStatus === "init") {
      const audioDuration = formatTime(this.audioRef.duration.toFixed(0));

      this.setState({
        playerStatus: "isPlaying",
        audioDuration,
        rawAudioDuration: this.audioRef.duration
      });
      this.audioRef.play();
    }
    if (this.state.playerStatus === "isPlaying") {
      this.setState({ playerStatus: "paused" });
      this.audioRef.pause();
    }
    if (this.state.playerStatus === "paused") {
      this.setState({ playerStatus: "isPlaying" });
      this.audioRef.play();
    }
  }

  handleChangeVolume(value) {
    console.log("`App.handleChangeVolume()`", value);
  }

  handleIncreasePlayback() {
    // audio
    this.audioRef.playbackRate = 1.0;
  }

  handleDecreasePlayback() {
    this.audioRef.playbackRate = 1.0;
  }

  handleScrubbing(time) {
    this.setState((prevState, prevProps) => {
      if (Math.abs(time - this.audioRef.currentTime) > 1) {
        this.audioRef.currentTime = time;
        return {
          currentTime: this.audioRef.currentTime
        };
      }
    });
  }

  handleSeekForward() {
    const newTime = 30 + this.audioRef.currentTime;
    this.setState({ playerStatus: "isPlaying", currentTime: newTime });
    this.audioRef.currentTime = newTime;
    this.audioRef.play().catch(error => console.log(error.message));
  }

  handleSeekBackward(event) {
    const newTime = Math.floor(this.audioRef.currentTime - 15);
    this.audioRef.currentTime = newTime;
    this.audioRef.play().catch(error => console.log(error.message));
  }

  componentDidMount(prevProps, prevState) {
    this.audioRef.addEventListener("timeupdate", e => {
      let {
        target: { currentTime }
      } = e;
      this.setState({
        currentTime: currentTime,
        displayTime: getTime(currentTime)
      });
    });
  }

  componentWillUnmount() {
    this.audioRef.removeEventListener("timeupdate", () => {});
  }

  render() {
    const {
      size: { height: appHeight, width: appWidth }
    } = this.props;

    const displayTime = this.state.displayTime;
    const audioDuration = this.state.audioDuration;

    return (
      <>
        <audio
          type="audio/mp3"
          preload="auto"
          ref={element => (this.audioRef = element)}
          src={this.state.audioToPlay}
          style={{ display: "none" }}
        >
          Sorry your browser can't see this multi-media file. You can download
          the file directly at: <a href={this.state.audioToPlay}>download</a>
        </audio>
        <ThemeProvider theme={theme}>
          <Flex100
            flexDirection="column"
            alignItems="center"
            minHeight="100vh"
            width={[1]}
            style={{
              position: "relative"
            }}
          >
            <MeasuredFlex
              getPodcastPlayerDimensions={this.getPodcastPlayerDimensions}
              flexDirection="column"
              minHeight="100vh"
              width={[1, "860px"]}
              style={{
                position: "relative"
              }}
            >
              <nav>
                <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>{" "}
                <Link to="episodes">Episodes</Link>
                <div>
                  Hellooooooo
                  {displayTime} / {audioDuration}
                </div>
              </nav>

              <Router>
                <Home
                  appHeight={appHeight}
                  appWidth={appWidth}
                  handleSeekForward={this.handleSeekForward}
                  handleSeekBackward={this.handleSeekBackward}
                  handlePlayerToggle={this.handlePlayerToggle}
                  handlePlayMedia={this.handlePlayMedia}
                  imageUrl={this.state.imageUrl}
                  playerStatus={this.state.playerStatus}
                  playerVisibility={this.state.playerVisibility}
                  currentPlayingIndex={this.state.currentPlayingIndex}
                  path="/"
                />
                <EpisodeList
                  path="/episodes"
                  handlePlayMedia={this.handlePlayMedia}
                  handleSelectAndPlayMedia={this.handleSelectAndPlayMedia}
                  playerVisibility={this.playerVisibility}
                />
                <Dashboard
                  getPodcastPlayerDimensions={this.getPodcastPlayerDimensions}
                  appHeight={appHeight}
                  appWidth={appWidth}
                  podcastPlayerDimensions={{
                    playerHeight: this.state.playerHeight,
                    playerWidth: this.state.playerWidth
                  }}
                  currentTime={this.state.currentTime}
                  audioDuration={this.state.audioDuration}
                  rawAudioDuration={this.state.rawAudioDuration}
                  getH2Position={this.getH2Position}
                  handleSelectAndPlayMedia={this.handleSelectAndPlayMedia}
                  headerPosition={this.state.headerPosition}
                  handleScrubbing={this.handleScrubbing}
                  handleSeekForward={this.handleSeekForward}
                  handleSeekBackward={this.handleSeekBackward}
                  handlePlayerToggle={this.handlePlayerToggle}
                  handlePlayMedia={this.handlePlayMedia}
                  handleChangeVolume={this.handleChangeVolume}
                  imageUrl={this.state.imageUrl}
                  playerStatus={this.state.playerStatus}
                  playerVisibility={this.state.playerVisibility}
                  currentPlayingIndex={this.state.currentPlayingIndex}
                  path="dashboard"
                />
              </Router>
              {/* <PodcastPlayer
          handleSeekForward={this.handleSeekForward}
          handleSeekBackward={this.handleSeekBackward}
          handlePlayerToggle={this.handlePlayerToggle}
          handlePlayMedia={this.handlePlayMedia}
          imageUrl={this.state.imageUrl}
          playerStatus={this.state.playerStatus}
          playerVisibility={this.state.playerVisibility}
          currentPlayingIndex={this.state.currentPlayingIndex}
        /> */}
            </MeasuredFlex>
          </Flex100>
        </ThemeProvider>
      </>
    );
  }
}

export default withSize({
  monitorHeight: true,
  monitorPosition: true,
  monitorWidth: true
})(App);
