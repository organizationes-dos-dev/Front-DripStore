import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginFacebook from "../LoginBody/LoginFacebook/LoginFacebook";
import LoginGoogle from "../LoginBody/LoginGoogle/LoginGoogle";
import "../CadastrarBody/FormCadastrar.css"

function FormCadastrar() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  return (
    <div className="FormCadastrar">
      <div className="Titles">
        <h1 style={{fontSize: "26px", paddingTop: "2vh", paddingBottom: "1vh"}}>Crie a sua conta</h1>
        <p style={{paddingBottom: "1vh"}} className="titlesForm">Já possui uma conta? Entre <Link className="linkCadastrar" to="/login">aqui</Link></p>
      </div>
      <form>
        <div className="emailInput">
          <label style={{fontSize: "12px"}} htmlFor="email">Email *</label>
          <input
            style={{ background: "rgb(248, 248, 248)", height: "6vh" }} 
            type="email"
            name="email"
            placeholder="Insira seu login ou email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Link to="/register"><button className="button" type="submit">Criar Conta</button></Link>

        </div>
      </form>
      <div className="Icons">
        <p>Ou faça login com</p>
        <LoginGoogle />
        <LoginFacebook />
      </div>
    </div>
  );
}

export default FormCadastrar;
