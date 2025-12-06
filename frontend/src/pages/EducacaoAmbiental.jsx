import imageMar from '../assets/pexels-photo-1001682 1.png';  

import iconExcelencia from '../assets/medalha-estrela 1.png';
import iconColaboracao from '../assets/pessoas 2.png';
import iconImpacto from '../assets/protecao-ambiental 1.png';
import imagemYris from '../assets/unnamed.jpg';
import imagemWanessa from '../assets/cbcab80c-ba69-4ed0-8a51-5f41776cab84.jpg';
import imagemBiel from '../assets/820790ee-35b8-4a2a-b021-e0318c4e04a7.jpg';
import imagemJulia from '../assets/IMG_4344.jpeg';
import imagemAnderson from '../assets/andersondocapa.jpg';


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
          <img src={imageMar} alt="Água limpa" />
          <div className="badge-impacto">
            500+
            <span>alunas impactadas</span>
          </div>
        </div>
      </section>

     {/* VALORES COM ÍCONES REAIS (aqui está o que você pediu) */}
      <section className="valores">
        <div className="card-valor excelencia">
          <div className="icone-valor">
            <img src={iconExcelencia} alt="Excelência" />
          </div>
          <h3>Excelência</h3>
          <p>Reconhecimento nacional pela qualidade do programa educacional</p>
        </div>

        <div className="card-valor colaboracao">
          <div className="icone-valor">
            <img src={iconColaboracao} alt="Colaboração" />
          </div>
          <h3>Colaboração</h3>
          <p>Parcerias com instituições públicas e privadas</p>
        </div>
        <div className="card-valor impacto">
          <div className="icone-valor">
            <img src={iconImpacto} alt="Impacto Social" />
          </div>
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
            <img src={imagemYris} alt="Yris" />
            <h4>Clara Yris</h4>
            <p>Designer UX/UI</p>
          </div>
          <div className="membro">
         <img src={imagemJulia} alt="Julia" />
            <h4>Júlia Rita</h4>
            <p>Desenvolvedora Front End</p>
          </div>
          <div className="membro">
               <img src={imagemWanessa} alt="Wanessa" />
            <h4>Wanessa Sabrina</h4>
            <p>Coordenadora Geral</p>
          </div>
          <div className="membro">
           <img src={imagemAnderson} alt="Anderson" />
            <h4>Anderson Silva</h4>
            <p>Designer UX/UI</p>
          </div>
          <div className="membro">
           <img src={imagemBiel} alt="Gabriel" />
            <h4>Victor Gabriel </h4>
            <p>Desenvolvedor Back End</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EducacaoAmbiental