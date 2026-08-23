import Loja from "./components/Loja"
import Pet from "./components/Pet"
import Contato from "./components/Contato"

const App = () => {
  return (
    <>
      <Loja nome="Pet Shop Zambo" endereco="Rua das Flores, 123"
      cidade = "Guarulhos" telefone = "11 99999-9999"></Loja>
      <Pet id={1} nome="Rex" raca="Rottweiller" cor="Preto" porte ="Grande" ></Pet>
      <Contato id= {10} nome="Gabriel Torres Zambo" telefone="11 12345-6789" email="gabrieltzmb@gmail.com" ></Contato>
    </>
  )
}

export default App
