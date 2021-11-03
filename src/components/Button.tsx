import React from 'react';

interface Props {
  handleClick: (event: React.MouseEvent, id:number) => void;
}

export const Button = (props: Props) => {
  return <button onClick={event => props.handleClick(event, 1)}>Click</button>;
};
