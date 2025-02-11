import { useState } from "react";

const UseList = () => {
  const [lista] = useState(["Pedro", "Tiago", "João"]);

  const [usuarios] = useState([
    {id: 1, nome: "Mateus", login: "mateus@gmail.com"},
    {id: 2, nome: "Marcos", login: "marcos@gmail.com"},
    {id: 3, nome: "Lucas", login: "lucas@gmail.com"},
  ])

  return (
    <div>
      <h3>Lista com especificação do índice</h3>  
      <p>Nome: {lista[0]}</p>
      <p>Nome: {lista[1]}</p>
      <p>Nome: {lista[2]}</p>

      <h3>Lista com map</h3>
      <ul>
        {lista.map((valorItem, numeroIndice) => (
          <li style={{ listStyle: "none" }} key={numeroIndice}>
            Nome {numeroIndice}: {valorItem}
          </li>
        ))}
      </ul>

      <h3>Lista de objetos</h3>
        {usuarios.map( (user) => ( <h4 key={user.id}> O nome é: {user.nome} - Seu login é: {user.login}</h4>))}
    </div>
  );
};

export default UseList;
