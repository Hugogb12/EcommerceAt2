import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SideBar.css";

function Sidebar() {
  const navigate = useNavigate(); // Hook para navegação após o logout

  const handleLogout = async () => {
    try {
      // Enviar a requisição para o servidor
      await axios.post("http://localhost:5000/api/usuario/logout");

      // Remover o token JWT do localStorage
      localStorage.removeItem("authToken");

      // Redirecionar para a página de login
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Erro ao fazer logout", error);
    }
  };
  return (
    <>
      <div id="D">
        <div id="Side">
          <div id="MetadeIcon">
            
            <div className="DivBox">
              {" "}
              <Link to="/adminc">
                <h1>usuario</h1>
              </Link>
            </div>
            <div className="DivBox">
              {" "}
              <h1>produto</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
