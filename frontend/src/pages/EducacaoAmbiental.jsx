function EducacaoAmbiental() {
  return (
    <div className="pagina-educacao">
      <div className="cabecalho-educacao">
        <h1>Quem somos?</h1>
        <div className="balao-educacao">
          Educação Ambiental
          <br />
          Materiais educativos, vídeos e recursos para aprender sobre saneamento básico e recursos hídricos
        </div>
      </div>

      {/* SEÇÃO SOBRE NÓS */}
      <section className="sobre-nos">
        <div className="texto-sobre">
          <h2>Sobre Nós</h2>
          <p>
            O projeto <strong>Guardiãs das Águas</strong> nasceu da necessidade urgente de promover a educação ambiental sobre saneamento básico e recursos hídricos, com foco especial no protagonismo feminino.
          </p>
          <p>
            Iniciado em 2023 pelo SENAI, o projeto atua em seis cidades brasileiras estratégicas, capacitando jovens mulheres a se tornarem agentes de transformação em suas comunidades. Através de workshops, palestras, visitas técnicas e ações práticas, as participantes desenvolvem conhecimentos sobre tratamento de água, gestão de resíduos, saneamento básico e preservação ambiental.
          </p>
          <p>
            Mais do que um projeto educacional, o Guardiãs das Águas é um movimento de conscientização que já impactou centenas de estudantes e suas famílias, promovendo mudanças reais nas comunidades onde atua.
          </p>
        </div>

        <div className="imagem-impacto">
          <img src="https://i.imgur.com/8vJ8z9K.jpeg" alt="Água limpa" />
          <div className="badge-impacto">
            500+
            <span>alunas impactadas</span>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="valores">
        <div className="card-valor excelencia">
          <div className="icone-valor">Trophy</div>
          <h3>Excelência</h3>
          <p>Reconhecimento nacional pela qualidade do programa educacional</p>
        </div>

        <div className="card-valor colaboracao">
          <div className="icone-valor">Users</div>
          <h3>Colaboração</h3>
          <p>Parcerias com instituições públicas e privadas</p>
        </div>

        <div className="card-valor impacto">
          <div className="icone-valor">Heart</div>
          <h3>Impacto Social</h3>
          <p>Transformação real nas comunidades participantes</p>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="equipe">
        <h2>Nossa Equipe</h2>
        <p className="subtitulo-equipe">Profissionais dedicadas à educação ambiental e ao empoderamento feminino</p>

        <div className="membros-equipe">
          <div className="membro">
            <img src="https://i.imgur.com/3vR8kLp.jpeg" alt="Ana Silva" />
            <h4>Ana Silva</h4>
            <p>Coordenadora Geral</p>
          </div>
          <div className="membro">
            <img src="https://i.imgur.com/7pX9mZc.jpeg" alt="Helena Santos" />
            <h4>Helena Santos</h4>
            <p>Coordenadora Geral</p>
          </div>
          <div className="membro">
            <img src="https://i.imgur.com/5tY6nJw.jpeg" alt="Laura Oliveira" />
            <h4>Laura Oliveira</h4>
            <p>Coordenadora Geral</p>
          </div>
          <div className="membro">
            <img src="https://i.imgur.com/1qA4zXs.jpeg" alt="Alice Silva" />
            <h4>Alice Silva</h4>
            <p>Coordenadora Geral</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EducacaoAmbiental