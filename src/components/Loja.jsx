const Loja = (props) => {
  return (
    <>
      <h2>{props.nome}</h2>
      <p>{props.endereco}</p>
      <p>{props.cidade}</p>
      <p>{props.telefone}</p>
    </>
  )
}

export default Loja
