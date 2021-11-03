import React, { useEffect, useRef } from 'react';

interface Props {}

export const DomRef = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};
