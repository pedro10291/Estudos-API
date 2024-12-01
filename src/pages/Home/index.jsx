import { useEffect, useState, useRef } from "react";
import "./style.css";
import Lixeira from "../../assets/lixeira.svg";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([])
  
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')

    setUsers (usersFromApi.data)
  }

  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuarios</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="email" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map(user =>(
          <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email:<span>{user.email}</span></p>
          </div>
          <button>
            <img src={Lixeira} alt="lixeira" />
          </button>
        </div>


      ))}
      {/* <div>
        <div>
          <p>Nome:</p>
          <p>Idade:</p>
          <p>Email:</p>
        </div>
        <button>
          <img src={Lixeira} alt="lixeira" />
        </button>
      </div> */}
    </div>
  );
}

export default Home;
