import { useEffect, useState } from 'react'
import './App.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'


function App() {

  
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')
  const [load, setLoad] = useState(false)


  /* Pegando usuários no banco de dados */
  async function getUsers() {
    setLoad(true)
    const usersApi = await api.get("/Users")

    setLoad(false)

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
        setEmail('')
        setName('')
        setIdade('')
    
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
        <input name='nome' type="text" onChange={(e) => setName(e.target.value)} required value={name}/>
        <input name='email' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input name='idade' type="number" onChange={(e) => setIdade(e.target.value)} value={idade}/>
        {load && <button disabled>Aguarde</button>}
        {!load && <button  onClick={criaUser}>Cadastrar</button>}
      </form>

    
    {load && <p>Carregando...</p>}
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
