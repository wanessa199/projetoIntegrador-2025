import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../../public/ondas-do-mar 6.png'
function Sidebar() {
  const { usuario, logout } = useAuth(); 

  return (
    <div className="sidebar">
      <div className="logo-sidebar">
        <img src={logo} alt="Águas Vivas" />
        Águas Vivas
      </div>


      {usuario && (
        <div className="usuario-info">
          <p>Olá, <strong>{usuario.nome}!😊</strong></p>
        </div>
      )}

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'ativo' : ''}>
          Home
        </NavLink>
        <NavLink to="/dashboard/noticias" className={({ isActive }) => isActive ? 'ativo' : ''}>
          Notícias
        </NavLink>
        <NavLink to="/dashboard/mapa" className={({ isActive }) => isActive ? 'ativo' : ''}>
          Mapa
        </NavLink>
        <NavLink to="/dashboard/canais-apoio" className={({ isActive }) => isActive ? 'ativo' : ''}>
          Canais de apoio
        </NavLink>
        <NavLink to="/dashboard/projetos" className={({ isActive }) => isActive ? 'ativo' : ''}>
          Projetos
        </NavLink>
        <NavLink to="/dashboard/contato" className={({ isActive }) => isActive ? 'ativo' : ''}>
          Contato
        </NavLink>
        <NavLink to="/dashboard/educacao-ambiental" className={({ isActive }) => isActive ? 'ativo' : ''}>
          Educação Ambiental
        </NavLink>
        <NavLink to="/dashboard/atuacao-nacional" className={({ isActive }) => isActive ? 'ativo' : ''}>
          Atuação Nacional
        </NavLink>
      </nav>


      {usuario && (
        <button onClick={logout} className="btn-sair">
          Sair
        </button>
      )}
    </div>
  );
}

export default Sidebar;