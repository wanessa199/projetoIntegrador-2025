function Contato() {
  return (
    <div className="pagina-contato">
      <div className="cabecalho-contato">
        <h1>Contato</h1>
        <div className="balao-contato">
          Entre em Contato
          <br />
          Estamos prontos para responder suas dúvidas e ouvir suas sugestões
        </div>
      </div>

      <div className="container-contato">
        {/* FORMULÁRIO À ESQUERDA */}
        <div className="formulario-contato">
          <h2>Envie uma Mensagem</h2>
          <form>
            <div className="campo">
              <label>Nome Completo</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>
            <div className="campo">
              <label>E-mail</label>
              <input type="email" placeholder="seu@email.com" />
            </div>
            <div className="campo">
              <label>Mensagem</label>
              <textarea rows="6" placeholder="Digite sua mensagem..."></textarea>
            </div>
            <button type="submit" className="btn-enviar">
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* INFORMAÇÕES À DIREITA */}
        <div className="info-contato">
          <h2>Informações de Contato</h2>

          <div className="info-item endereco">
            <strong>Endereço</strong>
            <p>SENAI Uberlândia<br />Rua Celso Chouri, 123<br />Uberlândia, MG</p>
          </div>

          <div className="info-item telefone">
            <strong>Telefone</strong>
            <p>(34) 3236-8600</p>
          </div>

          <div className="info-item email">
            <strong>E-mail</strong>
            <p>contato@guardiasdasaguas.org.br</p>
          </div>

          <div className="info-item redes">
            <strong>Redes Sociais</strong>
            <div className="redes-icons">
              <a href="#" className="icon">Instagram</a>
              <a href="#" className="icon">Facebook</a>
              <a href="#" className="icon">YouTube</a>
            </div>
          </div>

          <div className="info-item horario">
            <strong>Horário de Atendimento</strong>
            <p>Segunda a Sexta: 8h às 18h<br />Sábado e Domingo: Fechado</p>
          </div>
        </div>
      </div>

      {/* LOCALIZAÇÃO NO FINAL */}
      <div className="localizacao">
        <div className="balao-localizacao">
          <strong>Localização:</strong> SENAI Uberlândia
          <br />
          <span>CPP Dr. Celso Chouri</span>
          <a href="https://maps.app.goo.gl/exemplo" target="_blank" rel="noopener noreferrer" className="btn-mapa">
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contato