import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Row({children}: Props) {
  return <div css={{alignItems: 'center', display: 'flex'}}>{children}</div>;
}
