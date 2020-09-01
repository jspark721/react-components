import React from 'react';
import { withToggler } from './withToggler';

function Menu(props) {
  return (
    <div>
      <button onClick={props.toggle}>{props.on ? 'Hide' : 'Show'}</button>
      <nav style={{ display: props.on ? 'block' : 'none' }}>
        <h5>signed in as user123</h5>
        <ul>
          <li>Profile</li>
          <li>Repositories</li>
          <li>Stars</li>
          <li>Gists</li>
        </ul>
      </nav>
    </div>
  );
}

export default withToggler(Menu, { defaultOnValue: true });
