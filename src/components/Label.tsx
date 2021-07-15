import React from 'react';

interface Props {
  children: React.ReactNode;
  htmlFor?: string;
}

export default function Label({children, htmlFor}: Props) {
  return (
    <label
      css={{
        display: 'block',
        width: '10em',
        color: 'hotpink',
        fontSize: '2.4rem',
      }}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
