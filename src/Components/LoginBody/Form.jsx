import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authUser } from "../../services/UsuarioServices/usuariosService";
import LoginFacebook from "./LoginFacebook/LoginFacebook";
import LoginGoogle from "./LoginGoogle/LoginGoogle";

function Form() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await authUser(email, senha);
      if (result && result.status === 200) {
        setSuccess(result.data.message);
        setError('');
        navigate('/')
      } else {
        setError('Falha no login. Verifique suas credenciais.');
        setSuccess('');
      }
    } catch (error) {
      setError('Erro ao fazer login. Tente novamente.');
      setSuccess('');
    }
  };

  return (
    <div className="Form">
      <div className="Titles">
        <h1>Acesse sua conta</h1>
        <p className="titlesForm">Novo cliente? Então registre-se <Link to="/register">aqui</Link></p>
      </div>
      <form onSubmit={handleLogin}>
        <div className="emailInput">
          <label htmlFor="email">Login *</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Insira seu login ou email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="passwordInput">
          <label htmlFor="senha">Senha *</label>
          <input 
            type="password" 
            name="senha" 
            placeholder="Insira sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Link className="Link" to="/forgotsenha">Esqueci minha senha</Link>
        </div>
        <div>
          <button className="button" type="submit">Acessar Conta</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <div className="Icons">
        <p>Ou faça login com</p>
        <LoginGoogle/>
        <LoginFacebook/>
      </div>
    </div>
  );
}

export default Form;
