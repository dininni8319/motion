import useInput from '../../../../Hooks/useInput';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ConfigContext } from '../../../Context/Config/index';
import { AuthContext } from '../../../Context/Auth/index';
import { LoginStyled, InputSection } from './LoginStyle';
import { ButtonStyle } from '../Register/RegisterStyle';
import { Link } from 'react-router-dom';
import lakePhoto from './../../../assets/maldives.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraAlt } from '@fortawesome/free-solid-svg-icons';

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
            <section className="section-img">
                <FontAwesomeIcon icon={faCameraAlt} className={`fa-5x mx-1 icon-custom-style`} />
                  <h2>Welcome to Paradise</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos voluptates ullam velit, vero labore numquam? Sed ducimus obcaecati ut repellendus quas sint dolor suscipit praesentium, distinctio voluptatem quaerat pariatur?</p>
                  <img src={lakePhoto} alt="" />
            </section>
            <section className='row-form mt-12'>
                <InputSection className="mb-5 flex flex-col">
                    <h1 className={`text-black font-medium text-3xl mb-2`}>Login</h1>
                    <label htmlFor="" className="mb-2">Email</label>
                    <input type="email" {...email}/>
                </InputSection>
                <InputSection className="mb-5 flex flex-col">
                    <label htmlFor="" className="mb-2">Password</label>
                    <input type="password" {...password}/>
                    <ButtonStyle type='submit'>Submit</ButtonStyle>
                    <Link to='/register' className="pt-3 text-sm">Did you registerd already? Please Login!</Link>
                </InputSection>
            </section>
       </LoginStyled>
    )
};

export default Login;
