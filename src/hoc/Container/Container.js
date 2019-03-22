import React from "react";

const Container = WrappedComponent => {
  return props => (
    <div className="container">
      <WrappedComponent />
    </div>
  );
};

export default Container;
