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
        <h1 style={{fontSize: "26px", paddingTop: "2vh", paddingBottom: "1vh"}}>Esqueceu a senha?</h1>      
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
          <Link to="/register"><button className="button" type="submit">Esquecer a senha</button></Link>
        </div>
      </form>
    </div>
  );
}

export default FormCadastrar;
