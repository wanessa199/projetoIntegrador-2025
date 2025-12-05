import Cabecalho from '../components/Cabecalho'

function Cadastro() {
  return (
    <>
      <Cabecalho />
      <div className="conteiner-central">
        <div className="card-formulario">
          <h1 className="titulo-form">Cadastro</h1>
          
          <div className="campo">
            <label>Nome</label>
            <input type="text" />
          </div>

          <div className="campo">
            <label>Sobrenome</label>
            <input type="text" />
          </div>

          <div className="campo">
            <label>Email</label>
            <input type="email" />
          </div>

          <div className="campo">
            <label>Senha</label>
            <input type="password" />
          </div>

          <div className="campo">
            <label>Confirme sua senha</label>
            <input type="password" />
          </div>

          <button className="botao-verde">Cadastrar</button>
        </div>
      </div>
    </>
  )
}

export default Cadastro