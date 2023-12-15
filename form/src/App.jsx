import { useState } from 'react'
import './App.css'

function App() {
 
  //create object
  const [loginState, setLoginState] = useState({
    usuario:'',
    password: ''
  })

  //set Login
  const handleOnChangeLogin= (event, key) =>{
    setLoginState({...loginState,[key]: event.target.value})
  }

  //send
  const handleLoginForm = (event) => {
    event.preventDefault()
    console.log(loginState)
  }
  return (
    <>
      <div>
        <form onSubmit={handleLoginForm}>
          <h1>Login do Alune</h1>
          <p>Seja bem vinde!</p>
          <input type="text" name="usuario" id="usuario" placeholder='usuario'required
          value={loginState.usuario} 
          onChange={(event)=> handleOnChangeLogin(event, 'usuario')}/>
          <input type="password" name="password" id="password" placeholder='senha'required
          value={loginState.password} 
          onChange={(e)=> handleOnChangeLogin(e, 'password')}/>
          <button type="submit">Entrar</button>
          <a href="http://#">Recuperar Acesso</a>
        </form>
        
      </div>
      
    </>
  )
}

export default App
