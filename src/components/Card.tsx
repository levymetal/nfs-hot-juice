import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Card({children}: Props) {
  return (
    <div
      css={{
        background: 'rgb(0 0 0 / 75%)',
        borderRadius: '0.5rem',
        flex: 1,
        margin: '2vw',
        padding: '2rem',
      }}
    >
      {children}
    </div>
  );
}
