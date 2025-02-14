const ShowEvents = () => {
  const teste = (e) => {
    console.log(e);
    console.log("Função externa ativada");
  };

  return (
    <div>
      <button style={{ backgroundColor: "pink" }} onClick={teste}>
        Ativa função externa
      </button>
      <button
        style={{ backgroundColor: "lightgreen" }}
        onClick={() => console.log("Função interna ativada")}
      >
        Ativa função interna
      </button>
    </div>
  );
};

export default ShowEvents;
