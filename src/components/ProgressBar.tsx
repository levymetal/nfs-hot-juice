import React from 'react';

interface Props {
  value: number;
}

export default function ProgressBar({value}: Props) {
  return (
    <div css={{alignItems: 'center', display: 'flex', flex: 1, height: '6rem', margin: '0.25rem 0'}}>
      <div css={{background: 'rgb(255 255 255 / 30%)', borderRadius: '1rem', flex: 1, height: '1.5rem'}}>
        <div css={{background: 'chartreuse', borderRadius: '1rem', height: '1.5rem', width: `${value}%`}} />
      </div>
    </div>
  );
}
