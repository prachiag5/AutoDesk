// @flow
import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div>
      <h1>Welcome Page</h1>
      <span>
        Go to
        <Link to="/projects"> Projects Page</Link>
      </span>
    </div>
  );
}

export default WelcomePage;
