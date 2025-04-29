import "./EV.css";

export const EventPropagation = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hello, ${user}`);
  };

  const handleHover = () => {
    alert(`Hello, thanks for hovering`);
  };

  return (
    <>
      <WelComeUser
        onClick={() => HandleWelcomeUser("Vinod")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelComeUser = (props) => {
  const handleGreeting = () => {
    console.log(`Hello user, Welcome`);
    props.onClick();
  };
  return (
    <>
      <button onClick={props.onClick}>CLick</button>
      <button onClick={props.onMouseEnter}>Hover Me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
