import React from 'react';

interface Props {
  name: {
    firstName: string;
    lastName: string;
  };
}

export const Person = (props: Props) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};
