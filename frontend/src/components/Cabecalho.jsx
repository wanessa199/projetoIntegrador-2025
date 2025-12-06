import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../../public/ondas-do-mar 6.png'
function Cabecalho() {
  const { usuario, logout } = useAuth();
  const location = useLocation();


  if (usuario) {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Águas Vivas" />
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


  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Águas Vivas" />
        Águas Vivas
      </div>
      <div className="navegacao">
       Sejam bem vindos!
      </div>
    </div>
  );
}

export default Cabecalho;