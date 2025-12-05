function Projetos() {
  return (
    <div className="pagina-projetos">
      <div className="cabecalho-projetos">
        <h1>Projetos</h1>
        <div className="balao-projetos">
          Projetos Regionais
          <br />
          Conheça as iniciativas das Guardiãs das Águas nas seis cidades participantes
        </div>
      </div>

      {/* PRÓXIMOS EVENTOS */}
      <section className="proximos-eventos">
        <h2>Próximos Eventos</h2>

        <div className="lista-eventos">
          <div className="evento-card">
            <div className="data-evento">
              <span className="dia">14</span>
              <span className="mes">fev. 2025</span>
            </div>
            <div className="info-evento">
              <h3>Workshop: Análise de Qualidade da Água</h3>
              <p>Aprenda técnicas de análise laboratorial de água e interpretação de resultados.</p>
              <div className="detalhes">
                <span>14:00</span> • SENAI Uberlândia • 30 vagas
              </div>
            </div>
            <button className="btn-inscrever">Inscrever-se</button>
          </div>

          <div className="evento-card">
            <div className="data-evento">
              <span className="dia">21</span>
              <span className="mes">fev. 2025</span>
            </div>
            <div className="info-evento">
              <h3>Palestra: Protagonismo Feminino no Meio Ambiente</h3>
              <p>Conheça histórias de tradições de mulheres que fazem a diferença na área ambiental</p>
              <div className="detalhes">
                <span>19:00</span> • Auditório SENAI • 100 vagas
              </div>
            </div>
            <button className="btn-inscrever">Inscrever-se</button>
          </div>

          <div className="evento-card">
            <div className="data-evento">
              <span className="dia">27</span>
              <span className="mes">fev. 2025</span>
            </div>
            <div className="info-evento">
              <h3>Workshop: Análise de Qualidade da Água</h3>
              <p>Visita guiada para entender o processo completo de tratamento de esgoto.</p>
              <div className="detalhes">
                <span>09:00</span> • ETE Uberabinha • 25 vagas
              </div>
            </div>
            <button className="btn-inscrever">Inscrever-se</button>
          </div>
        </div>
      </section>

      {/* EVENTOS REALIZADOS */}
      <section className="eventos-realizados">
        <h2>Eventos Realizados</h2>
        <p className="subtitulo">Galeria de fotos dos últimos eventos</p>

        <div className="galeria-eventos">
          <div className="evento-passado">
            <h3>Workshop de Captação de Água da Chuva</h3>
            <p>14 de setembro de 2025 • 35 participantes</p>
            <div className="fotos-evento">
              <img src="https://i.imgur.com/2fK3j8P.jpeg" alt="Workshop" />
              <img src="https://i.imgur.com/8dR5kLm.jpeg" alt="Grupo" />
              <img src="https://i.imgur.com/9kL2mNx.jpeg" alt="Água" />
            </div>
          </div>

          <div className="evento-passado">
            <h3>Seminário de Recursos Hídricos</h3>
            <p>19 de agosto de 2025 • 80 participantes</p>
            <div className="fotos-evento">
              <img src="https://i.imgur.com/7pX9mZc.jpeg" alt="Palestra" />
              <img src="https://i.imgur.com/3vR8kLp.jpeg" alt="Público" />
              <img src="https://i.imgur.com/5tY6nJw.jpeg" alt="Equipe" />
              <img src="https://i.imgur.com/1qA4zXs.jpeg" alt="Certificado" />
            </div>
          </div>
        </div>

        <div className="ver-mais-fotos">
          <button className="btn-ver-todas">Ver todas as fotos</button>
        </div>
      </section>
    </div>
  )
}

export default Projetos