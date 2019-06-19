import React from "react";

import { PlayerControls as PlayerControlsBase } from "./PosedComps/PlayerControlsPosed";
import OtherPlayerButtons from "./OtherPlayerButtons";

class PlayerControls extends React.Component {
  render() {
    const {
      handleSeekForward,
      handleSeekBackward,
      handlePlayMedia,
      playerStatus
    } = this.props;
    return (
      <PlayerControlsBase border="crimson" width={1} flexDirection="row">
        <OtherPlayerButtons
          handleSeekForward={handleSeekForward}
          handleSeekBackward={handleSeekBackward}
          handlePlayMedia={handlePlayMedia}
          playerStatus={playerStatus}
        />
      </PlayerControlsBase>
    );
  }
}

export default PlayerControls;
