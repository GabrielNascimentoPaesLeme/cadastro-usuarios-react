import { useEffect, useState } from 'react'
import './App.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'


function App() {

  
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')


  /* Pegando usuários no banco de dados */
  async function getUsers() {
    const usersApi = await api.get("/Users")

    setUsers(usersApi.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  

  /* Criando usuário e inserindo ao banco de dados */
  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  async function criaUser() {
    if (name !== '' && email !== '' && idade !== ''){
      try{
        await api.post("/Users", {
          name: name,
          email: email,
          age: idade
        })
    
        getUsers()
  
      } catch (error) {
        if(error.response && error.response.status === 409) {
          alert("Email já cadastrado")
        } else{
          alert("Erro ao cadastrar Email")
        }
      }
    } else {
      alert('Preencha todos os dados')
    }
    
    
  }

  /* Removendo Usuário */
  async function removeUser(id){
    await api.delete(`/Users/${id}`)

    getUsers()
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type="text" onChange={(e) => setName(e.target.value)} required/>
        <input name='email' type="email" onChange={(e) => setEmail(e.target.value)} />
        <input name='idade' type="number" onChange={(e) => setIdade(e.target.value)}/>
        <button variant='dark' onClick={criaUser}>Cadastrar</button>
      </form>

    
    <div className="list-users">
      {users.map( user => (
        <div className="user" key={user.id}>
          <div className="users-info">
            <p>Nome: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Idade: <span>{user.age}</span></p>
          </div>
          <button className='btn-trash' onClick={() => removeUser(user.id)}>
            <img src={Trash} alt="trash" />
          </button>

        </div>
      ))}
    </div>


    </div>
  )
}

export default App
