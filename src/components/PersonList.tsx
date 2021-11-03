interface Props {
  names: {
    firstName: string;
    lastName: string;
  }[];
}

export const PersonList = (props: Props) => {
  return (
    <div>
      {props.names.map((name, index) => (
        <div key={index}>
          {name.firstName} {name.lastName}
        </div>
      ))}
    </div>
  );
};
