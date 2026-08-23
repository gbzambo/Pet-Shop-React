const Contato = ({id, nome, telefone, email}) => {
  return (
    <div>
      <h2>NOME: {nome}</h2>
      <p>ID: {id}</p>
      <p>Telefone:{telefone}</p>
      <p>E-mail:{telefone}</p>
    </div>
  )
}

export default Contato
