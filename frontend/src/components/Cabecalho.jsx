import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Cabecalho() {
  const { usuario, logout } = useAuth();
  const location = useLocation();

  // Se já estiver logado → mostra nome + sair
  if (usuario) {
    return (
      <div className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Águas Vivas" />
          Águas Vivas
        </div>
        <div className="navegacao">
          <span>Olá, {usuario.nome.split(' ')[0]}!</span>
          <button onClick={logout} className="btn-sair-header">
            Sair
          </button>
        </div>
      </div>
    );
  }

  // Se NÃO estiver logado → mostra os links com state
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Águas Vivas" />
        Águas Vivas
      </div>
      <div className="navegacao">
        <Link 
          to="/login" 
          state={{ modo: 'login' }}
          className={location.pathname === '/login' && location.state?.modo !== 'cadastro' ? 'ativo' : ''}
        >
          Entrar
        </Link>

        <Link 
          to="/login" 
          state={{ modo: 'cadastro' }}
          className={location.pathname === '/login' && location.state?.modo === 'cadastro' ? 'ativo' : ''}
        >
          Registrar
        </Link>
      </div>
    </div>
  );
}

export default Cabecalho;