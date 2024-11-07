import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authUser } from "../../services/UsuarioServices/usuariosService";
import LoginFacebook from "./LoginFacebook/LoginFacebook";
import LoginGoogle from "./LoginGoogle/LoginGoogle";
import "../LoginBody/Form.css"

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
        <h1 style={{fontSize: "26px", paddingTop: "2vh", paddingBottom: "1vh"}}>Acesse sua conta</h1>
        <p style={{paddingBottom: "1vh"}} className="titlesForm">Novo cliente? Então registre-se <Link className="linkCadastrar" to="/cadastrar">aqui</Link></p>
      </div>
      <form onSubmit={handleLogin}>
        <div className="emailInput">
          <label style={{fontSize: "12px"}} htmlFor="email">Login *</label>
          <input
            style={{ background: "rgb(248, 248, 248)", height: "6vh" }}
            type="email"
            name="email"
            placeholder="Insira seu login ou email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="passwordInput">
          <label style={{fontSize: "12px"}} htmlFor="senha">Senha *</label>
          <input
            style={{ background: "rgb(248, 248, 248)", height: "6vh" }}
            type="password"
            name="senha"
            placeholder="Insira sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Link className="Link" to="/forgotsenha">Esqueci minha senha</Link>
        </div>
        <div>
          <button className="button" type="submit" >Acessar Conta</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <div className="Icons">
        <p>Ou faça login com</p>
        <LoginGoogle />
        <LoginFacebook />
      </div>
    </div>
  );
}

export default Form;
