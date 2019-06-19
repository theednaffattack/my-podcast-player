import React from "react";
// import LargeChildComponent from './LargeChildComponent';
// import SmallChildComponent from './SmallChildComponent';
import { withSize, SizeMe } from "react-sizeme";

const MyComponent = ({ playerVisibility, size: { width, height } }) => {
  const ChildComponent = height > 600 ? "Large" : "Less Large";

  return (
    <div>
      <h1>
        My size is {width}px x {height}px
      </h1>
      {playerVisibility}
      {/* <ChildComponent /> */}
      {ChildComponent}
    </div>
  );
};

// force HOC to recalculate size when the component's height changes
export default withSize({ monitorHeight: true })(MyComponent);

export function MyApp() {
  return (
    <SizeMe>{({ size: { width } }) => <div>My width is {width}px</div>}</SizeMe>
  );
}
