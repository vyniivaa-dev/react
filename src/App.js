import { useEffect, useState } from "react";
import Navbar from "./child";
function App() {

  const [name, setName] = useState("Joe");
  console.log(name);
  useEffect(() => {
    setName("Jane");
  }, []);

 
  return (
    <>
      <Navbar n={name} a={"a"} v={"v"} y={"y"} />
    </>
  );
}

export default App;
