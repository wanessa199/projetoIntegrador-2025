function Dashboard() {
  return (
    <>
      <div className="banner-principal">
        <h1>Cuidar da água é cuidar da vida</h1>
        <p>Educação ambiental, saneamento básico e protagonismo feminino para um futuro sustentável.</p>
      </div>

      <div className="botoes-rapidos">
        <div className="botao-icone">Pessoas</div>
        <div className="botao-icone">Educação Ambiental</div>
        <div className="botao-icone">Agenda</div>
        <div className="botao-icone">Notícias</div>
        <div className="botao-icone">Contato</div>
      </div>

      <div className="cards-missao-visao">
        <div className="card-missao">
          <div className="icone-circulo">Target</div>
          <h3>Missão</h3>
          <p>Promover a educação ambiental sobre saneamento básico e recursos hídricos...</p>
        </div>
        <div className="card-missao">
          <div className="icone-circulo">Eye</div>
          <h3>Visão</h3>
          <p>Ser referência nacional em educação ambiental...</p>
        </div>
        <div className="card-missao">
          <div className="icone-circulo">Drop</div>
          <h3>Valores</h3>
          <p>Sustentabilidade, equidade de gênero, educação transformadora...</p>
        </div>
      </div>

      <div className="secao-mudanca">
        <h2>Faça Parte da Mudança</h2>
        <p>Junte-se a centenas de estudantes que estão transformando suas comunidades através da educação ambiental e do cuidado com os recursos hídricos.</p>
        <div className="botoes-projeto">
          <a href="#" className="botao-projeto conheca-projeto">Conheça o Projeto</a>
          <a href="#" className="botao-projeto ver-regionais">Ver Projetos Regionais</a>
        </div>
      </div>

      <div className="cidades-participantes">
        <div className="cidade-card">CE<br/>Juazeiro do Norte</div>
        <div className="cidade-card">SE<br/>Aracajú</div>
        <div className="cidade-card">MT<br/>Cuiabá</div>
        <div className="cidade-card">RS<br/>Rio Grande</div>
        <div className="cidade-card">MG<br/>Uberaba</div>
        <div className="cidade-card">MG<br/>Uberlândia</div>
      </div>
    </>
  )
}

export default Dashboard