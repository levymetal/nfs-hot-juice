import React from 'react';

interface Props {
  children: React.ReactNode;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  multiple?: boolean;
}

export default function Select({children, name, onChange, value, multiple = false}: Props) {
  return (
    <select
      css={{
        appearance: 'none',
        background: multiple
          ? 'none'
          : `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB0ElEQVR4Xu3aMVLDMBBA0Z+GO3AOKjo4DHAmchoqqDhH7kDFbIZ4nOA4trSrlaV1AxkCtr5XL8wkOzo/dp2vnwgQE9B5gdgCnQ9AIBhbILZA5wViCwB74KXTQdjLBNwBH8BjZxE+gefTFrgHvgH52sNxAB6Aw9gAmQCZBJmIlo8f4An4kkVeIvgKvLe8euDtz73jMqdeBVpGUdYmAYZjKkCrKB7RA2QLzAaQH7aG4oDe5fae+0eoFRTP0FsTQJ7bAopn6K0NIM/fMor/0EsJsFUUJ9FLCbBFFK+ilxpAfm8rKM6ilxNgKyjOopcboHYUb6KnEaBWFBehpxGgRhQXo6cVoCYUV6GnGaAWFFehpx3AG8XV6FkE8EIxCT2LAB4oJqNnFaAkilnoWQYohWIWetYBrFHMRq9EACsUVdArEcACRTX0SgXQRFEVvZIBtFBURa90gFwU1dHzCJCKogl6HgFSUDRDzyvAGhRN0fMMsBRFU/S8A9xC0Ry9GgJcQ7EIejUEmEKxGHq1BBijKN8PH1m5vEDrx96fE5R3n08uWK918u97B3BZ9PikEcD9FjhfQEyA8w1wP31MgPstcL6AmADnG+B++pgA91vgfAHdT8Av+Vxk4C70OXQAAAAASUVORK5CYII=)
          no-repeat calc(100% - 1.5rem) center/1rem;`,
        borderRadius: 0,
        border: '1px solid',
        color: 'white',
        fontFamily: 'inherit',
        fontSize: '2.4rem',
        padding: '0.25em',
        margin: '0.25rem 0',
        width: '100%',

        ':focus': {
          outline: 'none',
          borderColor: 'hotpink',
        },
      }}
      id={name}
      name={name}
      onBlur={onChange}
      onChange={onChange}
      value={value}
      multiple={multiple}
    >
      {children}
    </select>
  );
}
