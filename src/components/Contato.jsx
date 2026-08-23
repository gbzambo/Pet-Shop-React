import { useState } from "react";
const Contato = ({id, nome, telefone, email}) => {
    const [avaliacao, setAvaliacao] = useState(0);
  return (
    <div>
      <h2>NOME: {nome}</h2>
      <p>ID: {id}</p>
      <p>Telefone:{telefone}</p>
      <p>E-mail:{email}</p>
     <div>
    <p>Avalie o atendimento:</p>

    <button onClick={() => setAvaliacao(1)}>⭐ 1</button>
    <button onClick={() => setAvaliacao(2)}>⭐ 2</button>
    <button onClick={() => setAvaliacao(3)}>⭐ 3</button>
    <button onClick={() => setAvaliacao(4)}>⭐ 4</button>
    <button onClick={() => setAvaliacao(5)}>⭐ 5</button>

    <p>Avaliação: {avaliacao} ⭐</p>
</div>
    </div>
  )
}

export default Contato
