import "./EV.css";

export const EventHandling = () => {
  //     function handleButtonClick() {
  //     alert("Hey Im Onclick Event");
  //   }

  const handleButtonClick = (event) => {
    // console.log(event);
    // console.log(event.target);
    alert("Hey Im Onclick Event");
  };

  const handleWelcomeUser = (user) => {
    console.log(`hello ${user} Welcome to my channel`);
  };

  return (
    <>
      <button onClick={handleButtonClick}>Click Me</button>
      <br></br>
      <button onClick={() => handleButtonClick()}>Click Me 2</button>
      <br />
      {/* /* //? Inline Event Handlers} */}
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br />
      {/* //? Function Components with Inline Arrow Functions */}
      <button onClick={() => alert("Hey Im Inline arrow Function")}>
        Inline Arr fun
      </button>
      <br></br>
      {/* {/* //? Passing Arguments to Event Handlers } */}
      <button onClick={() => handleWelcomeUser("Vinod")}>click Me</button>
      {/* <button onClick={() => handleWelcomeUser("vinod")}>click Me</button> */}
      <button onClick={() => handleWelcomeUser("Ram")}>click Me</button>
    </>
  );
};
