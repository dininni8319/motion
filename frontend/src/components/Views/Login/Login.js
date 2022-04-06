import useInput from '../../../Hooks/useInput';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ConfigContext } from '../../Context/Config/index';
import { AuthContext } from '../../Context/Auth/index';
import { LoginStyled, InputSection } from './LoginStyle';
import { ButtonStyle } from '../Register/RegisterStyle';
import { Link } from 'react-router-dom';
import { SideHeader } from './../../UI/index';

const Login = () => {
    const { url } = useContext(ConfigContext);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const email = useInput('');
    const password = useInput('');

    const handleLogin = (e) => {
        e.preventDefault();

        fetch(`${url.backend}/api/users/login`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                let loginData = data.data;
                login(
                    loginData.first_name,
                    loginData.last_name,
                    data.token,
                    loginData.id
                );
                navigate('/');
            });
    };

    return (
        <LoginStyled onSubmit={handleLogin}>
            
            <SideHeader />
            <section className="row-form mt-12">
                <InputSection className="mb-5 flex flex-col">
                    <h1 className={`text-black font-medium text-3xl mb-2`}>
                        Login
                    </h1>
                    <label htmlFor="" className="mb-2">
                        Email
                    </label>
                    <input type="email" {...email} className="rounded"/>
                </InputSection>
                <InputSection className="mb-5 flex flex-col">
                    <label htmlFor="" className="mb-2">
                        Password
                    </label>
                    <input type="password" {...password} className="rounded"/>
                    <ButtonStyle type="submit">Submit</ButtonStyle>
                    <Link to="/register" className="pt-3 text-sm">
                        Did you already register? Please Login!
                    </Link>
                </InputSection>
            </section>
        </LoginStyled>
    );
};

export default Login;
