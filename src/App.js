import { useState } from "react";
import Child from "./child";
function App() {

const [name, setName] = useState("Joe");
 
  return (
    <>
      <h1>{name}</h1>
      <Child n={name} a={"a"} v={"v"} y={"y"} />
    </>
  );
}

export default App;
