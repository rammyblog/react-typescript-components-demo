import React from 'react';

interface Props {
    children: React.ReactNode;
}

export const Oscar = (props: Props) => {
  return <div>{props.children}</div>;
};
