function Noticias() {
  return (
    <div className="pagina-noticias">
      {/* Título principal com balãozinho */}
      <div className="cabecalho-noticias">
        <h1>Notícias</h1>
        <div className="balao-noticias">
          Acompanhe as ações das Guardiãs das Águas através de fotos e vídeos dos projetos em desenvolvimento em todo o Brasil
        </div>
      </div>

      {/* Card Destaque Grande */}
      <div className="card-destaque">
        <img src="/noticia-destaque.jpg" alt="Destaque" className="img-destaque" />
        <div className="conteudo-destaque">
          <div className="tag-destaque">Destaque</div>
          <div className="tag-conquista">Conquistas</div>
          <h2>Projeto Guardiãs das Águas Alcança Marca de 500 Alunas</h2>
          <p>O projeto celebrou a formação de mais de 500 jovens mulheres em educação ambiental e saneamento básico em todo o Brasil.</p>
          <p className="autor-data">Equipe Guardiãs • 04 de outubro de 2025</p>
          <button className="btn-ler-mais">Ler Matéria Completa</button>
        </div>
      </div>

      {/* Grid de Notícias */}
      <div className="grid-noticias">
        <div className="card-noticia">
          <img src="/uberlandia.jpg" alt="Uberlândia" />
          <h3>Participantes de Uberlândia Desenvolvem Sistema de Aproveitamento de Água</h3>
          <p>Alunas criam solução sustentável para captação de água em comunidades carentes.</p>
          <p className="autor-data">Maria Santos • 02 de setembro de 2025</p>
          <button className="btn-ler-mais pequeno">Ler mais</button>
        </div>

        <div className="card-noticia">
          <img src="/mulheres-saneamento.jpg" alt="Mulheres no Saneamento" />
          <h3>Mulheres no Saneamento: O impacto das Guardiãs na transformação de comunidades</h3>
          <p>Relatório revela mudanças reais promovidas pelas participantes do projeto.</p>
          <p className="autor-data">Anderson Santos • 28 de fevereiro de 2025</p>
          <button className="btn-ler-mais pequeno">Ler mais</button>
        </div>

        <div className="card-noticia">
          <img src="/aracaju.jpg" alt="Aracaju" />
          <h3>Ação em Aracaju Recolhe 2 toneladas de Resíduos do Rio</h3>
          <p>Mais de 80 alunas participam de grande mutirão organizado pelas Guardiãs.</p>
          <p className="autor-data">Ana Silva • 20 de janeiro de 2025</p>
          <button className="btn-ler-mais pequeno">Ler mais</button>
        </div>

        <div className="card-noticia">
          <img src="/juazeiro.jpg" alt="Juazeiro" />
          <h3>Juazeiro do Norte Recebe Prêmio por Projeto de Gestão Hídrica</h3>
          <p>Iniciativa liderada por alunas é reconhecida nacionalmente por inovação em recursos hídricos.</p>
          <p className="autor-data">Carla Oliveira • 15 de dezembro de 2024</p>
          <button className="btn-ler-mais pequeno">Ler mais</button>
        </div>

        <div className="card-noticia">
          <img src="/workshop.jpg" alt="Workshop" />
          <h3>Workshop em Cuiabá Aborda Presença do Pantanal</h3>
          <p>Evento discute a importância da preservação do bioma e o papel das mulheres na luta ambiental.</p>
          <p className="autor-data">Carlos Oliveira • 10 de agosto de 2025</p>
          <button className="btn-ler-mais pequeno">Ler mais</button>
        </div>
      </div>

      {/* Newsletter no final */}
      <div className="newsletter">
        <p>Receba as Novidades por E-mail!</p>
        <div className="form-newsletter">
          <input type="email" placeholder="Seu melhor e-mail" />
          <button>Inscrever-se</button>
        </div>
      </div>
    </div>
  )
}

export default Noticias