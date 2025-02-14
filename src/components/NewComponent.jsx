// import "./css/NewComponent.css";

const NewComponent = () => {
  const isGerente = true; // variável para verificar se é gerente
  return (
    <div>
      <h1
        style={
          isGerente // faz a verificação se é gerente
            ? { color: "aquamarine", backgroundColor: "pink" } // se der verdadeiro
            : { color: "red", backgroundColor: "lightblue" } // se der falso
        }
      >
        Aqui vem uma estilização
      </h1>

      <p className="cr7">o melhor do mundo</p>
      <img
        src="https://assets.goal.com/images/v3/blt2aaca933046f8b00/Cristiano%20Ronaldo%20Portugal%202024%20(4).jpg"
        alt="Goat"
        width={200}
        height={150}
      />
      <p
        style={{ color: "purple", fontSize: "40px", backgroundColor: "yellow" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        delectus. Optio error aperiam sint, consequatur qui voluptas provident
        doloremque voluptatum quaerat dolorum natus, pariatur reprehenderit aut
        nesciunt aliquam. Commodi, aliquam.
      </p>
    </div>
  );
};

export default NewComponent;
