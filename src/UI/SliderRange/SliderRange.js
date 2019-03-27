import Slider from "rc-slider";
import React from "react";
import "./SliderRange.scss";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const SliderRange = () => {
  return <Range min={0} max={20} defaultValue={[3, 10]} />;
};

export default SliderRange;
