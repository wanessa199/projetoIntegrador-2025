import { Link } from 'react-router-dom';

// ÍCONES DOS BOTÕES RÁPIDOS (suas imagens na public/)
import iconPessoas from '../../public/pessoas 1.png';
import iconEducacao from '../../public/livro 1.png';
import iconAgenda from '../../public/calendario 1.png';
import iconNoticias from '../../public/noticia 1.png';
import iconContato from '../../public/telefone 1.png';

// ÍCONES DE MISSÃO, VISÃO E VALORES (lindos e combinando)
import iconMissao from '../assets/pingo-dagua 1.png';    
import iconVisao from '../assets/visao 1.png';       
import iconValores from '../assets/radar1.png';  

function Dashboard() {
  const botoesRapidos = [
    { nome: 'Mapa', icone: iconPessoas, link: '/dashboard/mapa' },
    { nome: 'Educação Ambiental', icone: iconEducacao, link: '/dashboard/educacao-ambiental' },
    { nome: 'Agenda', icone: iconAgenda, link: '/dashboard/projetos' },
    { nome: 'Notícias', icone: iconNoticias, link: '/dashboard/noticias' },
    { nome: 'Contato', icone: iconContato, link: '/dashboard/contato' },
  ];

  return (
    <>
      {/* BANNER PRINCIPAL */}
      <div className="banner-principal">
        <h1>Cuidar da água é cuidar da vida</h1>
        <p>Educação ambiental, saneamento básico e protagonismo feminino para um futuro sustentável.</p>
      </div>

      {/* BOTÕES RÁPIDOS */}
      <div className="botoes-rapidos">
        {botoesRapidos.map((botao, index) => (
          <Link to={botao.link} key={index} className="botao-icone">
            <div className="icone-wrapper">
              <img src={botao.icone} alt={botao.nome} className="icone-rapido" />
            </div>
            <span className="texto-botao">{botao.nome}</span>
          </Link>
        ))}
      </div>

      {/* MISSÃO, VISÃO E VALORES COM ÍCONES REAIS */}
      <div className="cards-missao-visao">
        <div className="card-missao">
          <div className="icone-mvv">
            <img src={iconMissao} alt="Missão" />
          </div>
          <h3>Missão</h3>
          <p>Promover a educação ambiental sobre saneamento básico e recursos hídricos com foco no protagonismo feminino.</p>
        </div>

        <div className="card-missao">
          <div className="icone-mvv">
            <img src={iconVisao} alt="Visão" />
          </div>
          <h3>Visão</h3>
          <p>Ser referência nacional em educação ambiental transformadora e empoderamento de jovens mulheres.</p>
        </div>

        <div className="card-missao">
          <div className="icone-mvv">
            <img src={iconValores} alt="Valores" />
          </div>
          <h3>Valores</h3>
          <p>Sustentabilidade, equidade de gênero, colaboração, inovação e impacto real nas comunidades.</p>
        </div>
      </div>

      {/* FAÇA PARTE DA MUDANÇA */}
      <div className="secao-mudanca">
        <h2>Faça Parte da Mudança</h2>
        <p>Junte-se a centenas de estudantes que estão transformando suas comunidades através da educação ambiental e do cuidado com os recursos hídricos.</p>
        <div className="botoes-projeto">
          <a href="#" className="botao-projeto conheca-projeto">Conheça o Projeto</a>
          <a href="#" className="botao-projeto ver-regionais">Ver Projetos Regionais</a>
        </div>
      </div>

      {/* CIDADES PARTICIPANTES */}
      <div className="cidades-participantes">
        <div className="cidade-card">CE<br/><span>Juazeiro do Norte</span></div>
        <div className="cidade-card">SE<br/><span>Aracajú</span></div>
        <div className="cidade-card">MT<br/><span>Cuiabá</span></div>
        <div className="cidade-card">RS<br/><span>Rio Grande</span></div>
        <div className="cidade-card">MG<br/><span>Uberaba</span></div>
        <div className="cidade-card">MG<br/><span>Uberlândia</span></div>
      </div>
    </>
  );
}

export default Dashboard;