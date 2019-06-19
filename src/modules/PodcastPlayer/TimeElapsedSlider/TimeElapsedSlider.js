// from: /src/modules/PodcastPlayer/TimeElapsedSlider/TimeElapsedSlider_v2.js

import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { SliderRail, Handle, Track } from "./v2_components"; // example render components - source below
import { getTime, formatTime } from "../../../App";

const sliderStyle = {
  position: "relative",
  width: "100%",
  touchAction: "none"
};

// const domain = [100, 500];
const defaultValues = [150];

class TimeElapsedSlider extends Component {
  state = {
    values: defaultValues.slice(),
    update: defaultValues.slice()
  };

  onUpdate = update => {
    // this.props.handleScrubbing(update);
    this.setState({ update });
  };

  onChange = values => {
    this.setState({ values });
    this.props.handleScrubbing(values[0]);
  };

  render() {
    // const {
    //   state: { values }
    // } = this;
    const { currentTime, domain } = this.props;
    const values = [currentTime];
    // const percentage = Math.round((currentTime / domain[1]) * 100);

    return (
      <>
        <div style={{ backgroundColor: "pink", position: "relative" }}>
          over
          <div
            style={{
              backgroundColor: "#eee",
              position: "absolute",
              right: 0,
              top: 0,
              left: `${Math.round((currentTime / domain[1]) * 100)}%`,
              height: "30px"
            }}
          >
            {Math.round((currentTime / domain[1]) * 100)}
            over
          </div>
          <div style={{ height: 120, width: "100%" }}>
            <div style={{ backgroundColor: "pink", position: "relative" }}>
              over
              <div
                style={{
                  backgroundColor: "#eee",
                  position: "absolute",
                  right: 0,
                  top: 0,
                  left: 85,
                  height: "30px"
                }}
              >
                {(currentTime / domain[1]) * 100}
                {Math.floor((currentTime / domain[1]) * 100)}
                over
              </div>
            </div>
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
                {({ getRailProps }) => (
                  <SliderRail getRailProps={getRailProps} />
                )}
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
                  <>
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
                  </>
                )}
              </Tracks>
            </Slider>

            <div>under</div>
          </div>
        </div>
      </>
    );
  }
}

export default TimeElapsedSlider;
