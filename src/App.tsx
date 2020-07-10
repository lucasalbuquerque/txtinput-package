import React from "react";
import TextInput from "./lib/components/TextInput";

function App() {
  return (
    <div className="App">
      <a>Learn React</a>
      <TextInput
        label="Email Address"
        placeholder="name@example.com"
        helpText="Esse é um help text"
      />
    </div>
  );
}

export default App;
