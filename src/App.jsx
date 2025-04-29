import "./components/Netflix.module.css";
import { Todo } from "./projects/ToDoList/Todo";
// import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";

export const App = () => {
  return (
    <section className="container">
      {/* <ToggleSwitch /> */}

      <Todo />
    </section>
  );
  // return React.createElement("h1", null, "Hello, Thapa Technical");
};

// };
