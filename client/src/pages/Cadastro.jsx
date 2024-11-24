import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/Login.css";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Função para lidar com o envio do formulário
  const handleRegister = async (e) => {
    e.preventDefault();

   
    try {
      await axios.post("http://localhost:5000/api/usuario/register", {
        email,
        senha,
      });
      navigate("/login"); // Vai para a Página de login
    } catch (error) {
      setError(error.response?.data?.error || "Erro ao cadastrar");
    }
  };
  return (
    <>
    <Link to="/" className="butback"> ← Voltar para pagina Inicial </Link>
      <div className="div1">
        <section className="Login1">
          <h1>
            {" "}
            <span id="s">X</span> Games <hr/>
            <h5>Cadastrar</h5>
          </h1>

          <form action="" onSubmit={handleRegister} id="">
            <div>
              <span className="Text2"> Email:</span>
              <input
                type="email"
                name=""
                id=""
                className="Text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <span className="Text2">Senha:</span>
              <input
                type="password"
                name=""
                id=""
                className="Text"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            {error && <p>{error}</p>}
            <input
              type="submit"
              name=""
              id=""
              value="Avançar"
              className="button1"
            />
          </form>
        </section>
      </div>
    </>
  );
}

export default Cadastro;
