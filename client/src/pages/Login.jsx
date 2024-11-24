import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
import "../CSS/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/usuario/login",
        {
          email,
          password: senha,
        }
      );

      const { token, role, userEmail } = response.data;

      // Faz o armazenamento do token no localStorage
      localStorage.setItem("token", token);

      // Verificar o papel do usuário ou o email para redirecionar corretamente
      if (email === "ian@gmail.com") {
        // Faz a Verificação do Email ser for ADM
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao fazer login", error);
      alert(
        "Erro ao fazer login: " +
          (error.response ? error.response.data.error : error.message)
      );
    }
  };
  return (
    <>
    <Link to="/" className="butback"> ← Voltar para pagina Inicial </Link>
      <div className="div1">
        <section className="Login1">
          <h1>
            {" "}
            <span id="s">X</span> Games <hr />
            <h6>Entrar</h6>
          </h1>

      <form action="" onSubmit={handleLogin}>
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

          <span id="s1">
            Não tem conta?{" "}
            <Link to="/cadastro">
              <span id="s2">Crie uma!</span>
            </Link>
          </span>

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

export default Login;
