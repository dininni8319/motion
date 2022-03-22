import useInput from '../../../../Hooks/useInput';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ConfigContext } from '../../../Context/Config/index';
import { AuthContext } from '../../../Context/Auth/index';
import { LoginStyled, InputSection } from './LoginStyle';
import { ButtonStyle } from '../Register/RegisterStyle';

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
       <LoginStyled onSubmit={handleLogin}> 
            <section className='row-form'>
                <InputSection className="mb-5 flex flex-col">
                    <h1 className={`text-black font-bold text-2xl mb-2`}>Login</h1>
                    <label htmlFor="">Email</label>
                    <input type="email" {...email}/>
                </InputSection>
                <InputSection className="mb-5 flex flex-col">
                    <label htmlFor="">Password</label>
                    <input type="password" {...password}/>
                    <ButtonStyle type='submit'>Submit</ButtonStyle>
                </InputSection>
                
               
            </section>
       </LoginStyled>
    )
};

export default Login;
