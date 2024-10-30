import { useEffect, useRef, useState } from "react";
import InputLabel from "../InputLabel/inputLabel";
import { updateData } from "../../services/UsuarioServices/usuariosService";
import "./ModalEditMinhasInformacoes.css"

export default function ModalEditMinhasInformacoes() {
  const inputNome = useRef();
  const inputCpf = useRef();
  const inputEmail = useRef();
  const inputTelefone = useRef();
  const inputEndereco = useRef();
  const inputBairro = useRef();
  const inputCidade = useRef();
  const inputCep = useRef();
  const inputComplemento = useRef();
  const inputSenha = useRef();
  const [usuario, setUsuario] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    googleId: "",
    id: "",
    enderecos: [
      {
        bairro: "",
        cep: "",
        cidade: "",
        complemento: "",
        id: "",
        rua: "",
        usrId: "",
      },
    ],
  });

  const submitForm = async () => {
    const usuario = {
      nome: inputNome.current.value,
      telefone: inputTelefone.current.value,
      email: inputEmail.current.value,
      cpf: inputCpf.current.value,
      senha: inputSenha.current.value,
      enderecos: [
        {
          rua: inputEndereco.current.value,
          bairro: inputBairro.current.value,
          cidade: inputCidade.current.value,
          cep: inputCep.current.value,
          complemento: inputComplemento.current.value,
        },
      ],
    };
    try {
      await updateData(usuario);
      alert("Usuário registrado com sucesso!");
      navigate("/login"); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      alert("Erro ao registrar. Tente novamente.");
    }
  };

  useEffect(() => {
    const storedUsuario = JSON.parse(localStorage.getItem("usuario"));
    if (storedUsuario) {
      setUsuario(storedUsuario);
    }
    console.log(storedUsuario);
  }, []);
  console.log(usuario);
  return (
    <>
    <div className="modalEdit">
        <h1>Modal de Editar</h1>
    </div>
    </>
  );
}
