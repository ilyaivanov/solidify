import { Component, createSignal } from "solid-js";
import "./App.scss";

const App: Component = () => {
  const [c, setC] = createSignal(0);

  setInterval(() => setC((v) => v + 1), 100);
  return <div>{c()}</div>;
};

export default App;
