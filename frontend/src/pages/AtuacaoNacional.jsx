import imagem1 from '../../public/frame 12.png'
import imagem2 from '../../public/frame 14.png'
import imagem3 from '../../public/frame 15.png'
import imagem4 from '../../public/frame 16.png'
import imagem5 from '../../public/frame 17.png'
import imagem6 from '../../public/frame 19.png'

function AtuacaoNacional() {
  return (
    <div className="pagina-atuacao">
      <div className="cabecalho-atuacao">
        <h1>Águas Vivas</h1>
        <div className="balao-atuacao">
          Projetos Regionais
          <br />
          Conheça as iniciativas das Guardiãs das Águas nas seis cidades participantes
        </div>
      </div>

      <h2 className="titulo-principal">Atuação Nacional</h2>
      <p className="subtitulo-atuacao">
        Cada cidade possui características únicas que desafiam abordagens específicas para educação ambiental e saneamento básico. Conheça nossos projetos regionais:
      </p>

      <div className="cidades-container">
     
        <div className="cidade-card">
          <div className="foto-cidade">
            <img src={imagem1} alt="Juazeiro do Norte" />
            <div className="overlay-cidade">CE Juazeiro do Norte</div>
          </div>
          <div className="conteudo-cidade">
            <p>Educação ambiental no sertão nordestino com foco em gestão hídrica e saneamento em regiões semiáridas.</p>
            <div className="participantes">85 participantes</div>
            <button className="btn-detalhes">Ver detalhes do projeto</button>
          </div>
        </div>

      
        <div className="cidade-card">
          <div className="foto-cidade">
            <img src={imagem2} alt="Aracaju" />
            <div className="overlay-cidade">SE Aracaju</div>
          </div>
          <div className="conteudo-cidade">
            <p>Preservação de cursos hídricos costeiros e conscientização sobre poluição marinha e fluvial.</p>
            <div className="participantes">72 participantes</div>
            <button className="btn-detalhes">Ver detalhes do projeto</button>
          </div>
        </div>

     
        <div className="cidade-card">
          <div className="foto-cidade">
            <img src={imagem5} alt="Uberaba" />
            <div className="overlay-cidade">MG Uberaba</div>
          </div>
          <div className="conteudo-cidade">
            <p>Proteção das nascentes do Pantanal e educação sobre o impacto do saneamento nos ecossistemas.</p>
            <div className="participantes">95 participantes</div>
            <button className="btn-detalhes">Ver detalhes do projeto</button>
          </div>
        </div>

   
        <div className="cidade-card">
          <div className="foto-cidade">
            <img src={imagem3} alt="Cuiabá" />
            <div className="overlay-cidade">MT Cuiabá</div>
          </div>
          <div className="conteudo-cidade">
            <p>Gestão sustentável de recursos hídricos no Triângulo Mineiro e tratamento de efluentes.</p>
            <div className="participantes">61 participantes</div>
            <button className="btn-detalhes">Ver detalhes do projeto</button>
          </div>
        </div>

       
        <div className="cidade-card">
          <div className="foto-cidade">
            <img src={imagem6} alt="Rio Grande" />
            <div className="overlay-cidade">RS Rio Grande</div>
          </div>
          <div className="conteudo-cidade">
            <p>Centro de excelência em educação ambiental com foco em tecnologias de tratamento de água.</p>
            <div className="participantes">21 participantes</div>
            <button className="btn-detalhes">Ver detalhes do projeto</button>
          </div>
        </div>

      
        <div className="cidade-card">
          <div className="foto-cidade">
            <img src={imagem4} alt="Uberlândia" />
            <div className="overlay-cidade">MG Uberlândia</div>
          </div>
          <div className="conteudo-cidade">
            <p>Saneamento básico em áreas periurbanas e preservação de lagos e recursos hídricos do sul.</p>
            <div className="participantes">58 participantes</div>
            <button className="btn-detalhes">Ver detalhes do projeto</button>
          </div>
        </div>
      </div>

      
      <div className="chamada-final">
        <div className="balao-chamada">
          Quer trazer o projeto para sua cidade?
          <br />
          Os Guardiãs das Águas estão sempre buscando ampliar seu alcance. Entre em contato para saber como implementar o projeto em sua região.
          <button className="btn-fale-conosco">Fale Conosco</button>
        </div>
      </div>
    </div>
  )
}

export default AtuacaoNacional