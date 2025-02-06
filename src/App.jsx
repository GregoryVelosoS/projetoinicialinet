import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="./patrick.jpg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="https://cdn.awsli.com.br/600x1000/1382/1382878/produto/277941453/205030-bob-esponja-9766r4m8wi.png"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Patrick Estrela + Bob Esponja calça quadrada</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quaerat
        quia, libero illum voluptatem blanditiis dolorem ab quidem eaque veniam
        nihil ea quas veritatis. Quis quisquam possimus placeat totam sapiente!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit,
        molestiae necessitatibus nam asperiores veritatis maxime, odit
        laboriosam nobis distinctio sint illum eum! Facilis voluptate beatae
        quasi, in ad dicta?
      </p>
    </>
  );
}

export default App;
