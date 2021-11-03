import React from 'react';

interface Props {
  children: string;
}

export const Heading = (props: Props) => {
  return <div>{props.children}</div>;
};
