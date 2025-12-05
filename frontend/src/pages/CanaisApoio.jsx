import iconeEscudo from '../../public/escudo1.png'

function CanaisApoio() {
  return (
    <div className="pagina-canais">
      <div className="cabecalho-canais">
        <h1>Canais de Apoio</h1>
        <div className="balao-canais">
          Telefones úteis, órgãos ambientais e canais de denúncia
        </div>
      </div>

      {/* CONTATOS DE EMERGÊNCIA */}
      <section className="emergencia">
        <h2>Contatos de Emergência</h2>
        <div className="cards-emergencia">
          <div className="card-emergencia">
              <img src={iconeEscudo} alt="Destaque" className="icone-escudo" />
            <h3>IBAMA - Instituto Brasileiro do Meio Ambiente</h3>
            
            <p className="telefone">0800-61-8080</p>
          </div>
          <div className="card-emergencia">
                 <img src={iconeEscudo} alt="Destaque" className="icone-escudo" />
            <h3>ANA Agência Nacional de Águas</h3>
            <p className="telefone">(61) 2109-5400</p>
          </div>
          <div className="card-emergencia">
               <img src={iconeEscudo} alt="Destaque" className="icone-escudo" />
            <h3>Defesa Civil</h3>
            <p className="telefone">199</p>
          </div>
        </div>
      </section>

      {/* ÓRGÃOS ESTADUAIS */}
      <section className="orgaos-estaduais">
        <h2>Órgãos Estaduais de Meio Ambiente</h2>
        <div className="lista-orgaos">
          <div className="orgao">
            <span className="tag-estado">Ceará</span>
            <div>
              <strong>SEMACE</strong> - Superintendência Estadual do Meio Ambiente<br />
              (85) 3101-5511 • ouvidoria@semace.ce.gov.br
            </div>
          </div>
          <div className="orgao">
            <span className="tag-estado">Sergipe</span>
            <div>
              <strong>ADEMA</strong> - Administração Estadual do Meio Ambiente<br />
              (79) 3179-7822 • adema@adema.se.gov.br
            </div>
          </div>
          <div className="orgao">
            <span className="tag-estado">Mato Grosso</span>
            <div>
              <strong>SEMA</strong> - Secretaria de Estado de Meio Ambiente<br />
              (65) 3613-7200 • sema@sema.mt.gov.br
            </div>
          </div>
          <div className="orgao">
            <span className="tag-estado">Rio Grande do Sul</span>
            <div>
              <strong>FEPAM</strong> - Fundação Estadual de Proteção Ambiental<br />
              (51) 3288-9200 • fepam@fepam.rs.gov.br
            </div>
          </div>
          <div className="orgao">
            <span className="tag-estado">Minas Gerais</span>
            <div>
              <strong>SEMAD</strong> - Secretaria de Estado de Meio Ambiente<br />
              (31) 3915-1100 • semad@meioambiente.mg.gov.br
            </div>
          </div>
        </div>
      </section>

      {/* SECRETARIAS MUNICIPAIS */}
      <section className="secretarias-municipais">
        <div className="lista-municipios">
          <div className="municipio">
            <span className="numero">1</span>
            <div>
              <strong>Juazeiro do Norte/CE</strong><br />
              Secretaria Municipal do Meio Ambiente<br />
              (88) 3512-1234
              <div className="extra">Companhia de Água e Esgoto do Ceará (CAGECE)<br />0800-275-0195</div>
            </div>
          </div>
          <div className="municipio">
            <span className="numero">2</span>
            <div>
              <strong>Aracaju/SE</strong><br />
              Secretaria Municipal do Meio Ambiente<br />
              (79) 3179-1947
              <div className="extra">Companhia de Saneamento de Sergipe (DESO)<br />0800-079-8195</div>
            </div>
          </div>
          <div className="municipio">
            <span className="numero">3</span>
            <div>
              <strong>Rio Grande/RS</strong><br />
              Secretaria Municipal do Meio Ambiente<br />
              (53) 3318-1929
              <div className="extra">Companhia de Água e Esgoto do Ceará (CAGECE)<br />0800-646-6444</div>
            </div>
          </div>
          <div className="municipio">
            <span className="numero">4</span>
            <div>
              <strong>Cuiabá/MT</strong><br />
              Secretaria Municipal de Meio Ambiente<br />
              (34) 3318-1293
              <div className="extra">Companhia de Água e Esgoto do Ceará (CAGECE)<br />(34) 3318-2200</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CanaisApoio