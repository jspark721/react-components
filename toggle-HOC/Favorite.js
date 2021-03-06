import React from 'react';
import { withToggler } from './withToggler';

function Favorite(props) {
  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span className='heart' onClick={props.toggle}>
          {props.on ? '❤️' : '♡'}
        </span>
      </h1>
    </div>
  );
}

const HigherOrderFavoriteComponent = withToggler(Favorite, {
  defaultOnValue: false,
});
export default HigherOrderFavoriteComponent;
