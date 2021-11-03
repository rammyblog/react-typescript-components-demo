type GreetProps = {
  tech: string;
  likes?: number;
  isLoggedIn: boolean;
};

const Greet = ({ tech, likes = 0, isLoggedIn }: GreetProps) => {
  return (
    <>
      {isLoggedIn && (
        <div>
          Welcome to {tech}, {likes} enjoys it
        </div>
      )}
    </>
  );
};

export default Greet;
