import UseProps from "../components/UseProps";
import styles from "./css/AulaQuatro.module.css";

import { useState } from "react";

const AulaQuatro = (props) => {
  const imgPadrao =
    "https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png";

  const [jogadores] = useState([
    {
      id: 7,
      nome: "Cristiano Ronaldo",
      imagem:
        "https://assets.goal.com/images/v3/blte9bf3e1450927e9c/GOAL_-_Blank_WEB_-_Facebook_-_2023-10-23T123757.662.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      descricao:
        "Cristiano Ronaldo dos Santos Aveiro, mais conhecido como Cristiano Ronaldo ou 'CR7', é um futebolista português que atua como extremo-esquerdo ou ponta de lança.",
    },
    {
      id: 10,
      nome: "Neymar Jr.",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/02/05/2133205001-neymar-jrxlejus6cwp082757892.jpg",
      descricao:
        "Neymar da Silva Santos Júnior, mais conhecido como Neymar Jr. ou Neymar, é um futebolista brasileiro que atua como ponta-esquerda ou atacante.",
    },
    {
      id: 5,
      nome: "Calleri",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVnkAxTds4Nk1_TCIFrWXTA07DqBvqd56LQ&s",
      descricao: "Toca no Calleri que é gol!",
    },
    {
      id: 1,
      nome: "Título novo card",
      imagem: imgPadrao,
      descricao: "Texto incrívelmente descritível",
    },
  ]);

  const [cantores] = useState([
    {
      id: 1,
      nome: "Anitta",
      imagem:
        "https://s2-quem.glbimg.com/pgxRAAo5HJhr-cvwHTD59RnJ8fQ=/0x0:1400x950/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2024/L/K/DnXhs5Q5CBsQ5BO23n5A/anitta-2.jpg",
      descricao:
        "Anitta é uma cantora, compositora, atriz e empresária brasileira. Ela começou a cantar aos 8 anos de idade em um coral de uma igreja católica no Rio de Janeiro. Aos 16 anos, foi morar sozinha no Rio de Janeiro e trabalhar como recepcionista em uma escola de idiomas para pagar um curso de inglês.",
    },
    {
      id: 3,
      nome: "Ludmilla",
      imagem:
        "https://blog.documentodoestudante.com.br/blog/wp-content/uploads/2024/09/quem-e-ludmilla-biografia-carreira-curiosidades-e-tudo-sobre-ela-1200x900-1.png",
      descricao:
        "Ludmilla é uma cantora, compositora e dançarina brasileira. Ela começou a carreira em 2012, postando vídeos de suas performances no YouTube. Em 2013, lançou seu primeiro single, 'Fala Mal de Mim', que se tornou um sucesso nas rádios brasileiras. Em 2014, lançou seu primeiro álbum de estúdio, 'Hoje', que inclui os singles 'Sem Querer', 'Te Ensinei Certin' e 'Hoje'.",
    },
    {
      id: 4,
      nome: "Ivete Sangalo",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgEGGlDhWSYmMG_XAsNr_pHiKsoSVZi6YRQ&s",
      descricao:
        "Ivete Sangalo é uma cantora, compositora e apresentadora brasileira. Ela começou a carreira em 1993, como vocalista da banda Eva. Em 1999, lançou seu primeiro álbum solo, 'Ivete Sangalo', que inclui os singles 'Canibal', 'Tá Tudo Bem' e 'Pererê'. Em 2000, lançou seu segundo álbum, 'Beat Beleza', que inclui os singles 'Festa' e 'Sorte Grande'.",
    },
    {
      id: 5,
      nome: "Título novo card",
      imagem: imgPadrao,
      descricao: "Texto incrívelmente descritível",
    },
  ]);
  return (
    <div>
      {props.cardsAtual === "jogadores" ? (
        <div id="CardJogadores">
          <h1>Cards Jogadores</h1>
          <div className={styles.cardArea}>
            {jogadores.map((jogador) => (
              <UseProps
                key={jogador.id}
                nome={jogador.nome}
                imagem={jogador.imagem}
                descricao={jogador.descricao}
              />
            ))}
          </div>
        </div>
      ) : (
        <div id="CardCantores">
          <h1>Cards Cantores</h1>
          <div className={styles.cardArea}>
            {cantores.map((cantor) => (
              <UseProps
                key={cantor.id}
                nome={cantor.nome}
                imagem={cantor.imagem}
                descricao={cantor.descricao}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AulaQuatro;
