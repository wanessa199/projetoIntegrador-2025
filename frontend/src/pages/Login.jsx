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

  
  const validarSenha = (valor) => {
  if (valor.length < 8) {
    setErroSenha('A senha deve ter no mínimo 8 caracteres');
    return false;
  }


  const temCaractereEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(valor);
  
  if (!temCaractereEspecial) {
    setErroSenha('A senha deve conter pelo menos 1 caractere especial (ex: ! @ # $ % & * ?)');
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

             
              {isRegister && erroSenha && (
                <div className="erro-senha">{erroSenha}</div>
              )}
              {isRegister && senha && !erroSenha && senha.length >= 8 && (
                <div className="sucesso-senha">Senha forte!</div>
              )}
            </div>

          
            {!isRegister && (
              <div className="checkbox-lembrar">
                <input type="checkbox" id="lembrar" />
                <label htmlFor="lembrar">Lembre de mim</label>
              </div>
            )}

            <button
              type="submit"
              className="botao-verde"
              disabled={isRegister && erroSenha}
            >
              {isRegister ? 'Cadastrar' : 'Entrar'}
            </button>
          </form>

       
          {!isRegister && (
            <a href="#" className="link-esqueceu">
              Esqueceu a senha?
            </a>
          )}

     
          <p className="toggle-auth">
            {isRegister ? 'Já tem conta?' : 'Ainda não tem conta?'}{' '}
            <span onClick={() => {
              setIsRegister(!isRegister);
              setErroSenha(''); 
            }}>
              {isRegister ? 'Faça login' : 'Cadastre-se'}
            </span>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;