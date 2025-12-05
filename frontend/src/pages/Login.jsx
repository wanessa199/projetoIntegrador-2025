import React, { useState } from 'react';    
import Cabecalho from '../components/Cabecalho';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const { login, registrar } = useAuth();

  // Validação de senha forte (mínimo 8 caracteres, maiúscula, minúscula, número e caractere especial)
  const validarSenha = (valor) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(valor)) {
      setErroSenha(
        'A senha deve ter no mínimo 8 caracteres, incluindo 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial (@$!%*?&).'
      );
      return false;
    }
    setErroSenha('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister) {
      if (!validarSenha(senha)) return;
      await registrar(nome, email, senha);
    } else {
      await login(email, senha);
    }
  };

  return (
    <>
      <Cabecalho />
      <div className="conteiner-central">
        <div className="card-formulario">
          <h1 className="titulo-form">{isRegister ? 'Cadastro' : 'Login'}</h1>

          <form onSubmit={handleSubmit}>
            {isRegister && (
              <div className="campo">
                <label>Nome</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="campo">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label>Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                  if (isRegister) validarSenha(e.target.value);
                }}
                required
              />

              {/* Feedback da senha no cadastro */}
              {isRegister && erroSenha && (
                <div className="erro-senha">{erroSenha}</div>
              )}
              {isRegister && senha && !erroSenha && senha.length >= 8 && (
                <div className="sucesso-senha">Senha forte!</div>
              )}
            </div>

            {/* Lembre de mim (só no login) */}
            {!isRegister && (
              <div className="checkbox-lembrar">
                <input type="checkbox" id="lembrar" />
                <label htmlFor="lembrar">Lembre de mim</label>
              </div>
            )}

            <button
              type="submit"
              className="botao-verde"
              disabled={isRegister && erroSenha} // desativa se a senha for fraca
            >
              {isRegister ? 'Cadastrar' : 'Entrar'}
            </button>
          </form>

          {/* Esqueceu a senha (só no login) */}
          {!isRegister && (
            <a href="#" className="link-esqueceu">
              Esqueceu a senha?
            </a>
          )}

          {/* Toggle entre login e cadastro */}
          <p className="toggle-auth">
            {isRegister ? 'Já tem conta?' : 'Ainda não tem conta?'}{' '}
            <span onClick={() => {
              setIsRegister(!isRegister);
              setErroSenha(''); // limpa erro ao trocar
            }}>
              {isRegister ? 'Faça login' : 'Cadastre-se'}
            </span>
          </p>

          {/* Dicas de senha (só no cadastro) */}
          {isRegister && (
            <div className="dicas-senha">
              <small>
                <strong>A senha deve conter:</strong><br />
                • Mínimo 8 caracteres<br />
                • 1 letra maiúscula • 1 letra minúscula<br />
                • 1 número • 1 caractere especial (@$!%*?&)
              </small>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;