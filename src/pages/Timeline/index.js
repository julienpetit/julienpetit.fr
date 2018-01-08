import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";

class Timeline extends Component {
  render() {
    return (
      <div className="timeline-page transition-item">
        Timeline

        <Link to="/">Home</Link>
        <Link to="/timeline">Timeline</Link>
      </div>
    );
  }
}

export default Timeline;
