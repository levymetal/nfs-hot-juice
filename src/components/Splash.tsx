import React from 'react';
import {mobileMq} from '../constants/media';

interface Props {
  onClick: () => void;
}

export default function Splash({onClick}: Props) {
  return (
    <div
      css={{
        background: 'rgb(0 0 0 / 85%)',
        height: '100vh',
        overflow: 'hidden',
        position: 'absolute',
        width: '100vw',
        zIndex: 3,
      }}
    >
      <div
        css={{
          left: '50%',
          position: 'absolute',
          textAlign: 'center',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img
          css={{display: 'block', marginBottom: '10rem', maxWidth: '100%', width: '727px'}}
          src={require('../images/hot-juice.png').default}
        />
        <button
          css={{
            background: 'white',
            border: 'none',
            borderRadius: '0.3rem',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: '4rem',
            padding: '0.25em 2em',

            ':focus, :hover': {
              background: 'hotpink',
            },

            [mobileMq]: {
              display: 'none',
            },
          }}
          onClick={onClick}
        >
          Start
        </button>
        <span
          css={{
            display: 'none',
            fontSize: '3rem',

            [mobileMq]: {
              display: 'block',
            },
          }}
        >
          Sorry, desktop only.
        </span>
      </div>
    </div>
  );
}
