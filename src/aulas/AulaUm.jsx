import MyComponent from "../components/MyComponent.jsx";
import NewComponent from "../components/NewComponent.jsx";
import OtherComponent from "../components/OtherComponent.jsx";

const AulaUm = () => {
  return (
    <div>
      <OtherComponent />
      <NewComponent />
      <h1>Meu título</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        aliquid omnis ratione aperiam accusantium, iste, explicabo reiciendis
        numquam atque dolorem similique. Quis corrupti illum aut voluptatem
        pariatur reiciendis qui voluptate.
      </p>
      <MyComponent />
    </div>
  );
};

export default AulaUm;
