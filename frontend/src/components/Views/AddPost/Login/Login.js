import useInput from '../../../../Hooks/useInput';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ConfigContext } from '../../../Context/Config/index';
import { AuthContext } from '../../../Context/Auth/index';

const Login = () => {
    
    const { url } = useContext(ConfigContext)
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const email = useInput('')
    const password = useInput('')

    const handleLogin = e => {
        e.preventDefault()

        fetch(`${url.backend}/api/users/login`, {
            method: "POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({email: email.value, password: password.value})
        })
         .then(resp => resp.json())
         .then(data => {
             let loginData = data.data
             login(loginData.first_name, loginData.last_name, data.token, loginData.id)
             navigate('/')
         })
    }
    
    return (
       <form onSubmit={handleLogin}> 
           <div>
               <label htmlFor="">Email</label>
               <input type="email" {...email}/>
           </div>
           <div>
               <label htmlFor="">Password</label>
               <input type="password" {...password}/>
           </div>
           <button type='submit'>Submit</button>
       </form>
    )
};

export default Login;
