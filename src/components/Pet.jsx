import cachorro from "../assets/cachorro.avif";
const Pet = ({id, nome, raca, cor, porte}) => {
  return (
    <div>
      <h2>{nome}</h2>
      <img src={cachorro} alt="Cachorro" />
      <p>ID: {id}</p>
      <p>Raça: {raca}</p>
      <p>Cor: {cor}</p>
      <p>Porte: {porte}</p>
    </div>
  )
}

export default Pet
