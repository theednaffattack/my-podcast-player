// from: /src/modules/PodcastPlayer/VolumeSlider/VolumeSlider_v2.js

import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { SliderRail, Handle, Track } from "../TimeElapsedSlider/v2_components"; // example render components - source below

const sliderStyle = {
  position: "relative",
  width: "100%",
  touchAction: "none"
};

const domain = [0, 100];
const defaultValues = [45];

class VolumeSlider extends Component {
  state = {
    values: defaultValues.slice(),
    update: defaultValues.slice()
  };

  onUpdate = update => {
    this.props.handleChangeVolume(update);
    this.setState({ update });
  };

  onChange = values => {
    this.props.handleChangeVolume(values);

    this.setState({ values });
  };

  render() {
    const {
      state: { values, update }
    } = this;
    return (
      <div style={{ height: 120, width: "100%" }}>
        <Slider
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>
    );
  }
}

export default VolumeSlider;
