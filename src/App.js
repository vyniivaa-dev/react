import { useState } from "react";
import Child from "./child"
function App() {

  const [name] = useState("John");
  console.log(name);


  return (
    <>
      <h1>Hello</h1>
      <Child />
    </>
  );
}

export default App;
