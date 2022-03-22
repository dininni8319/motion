import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ConfigContext } from '../../../Context/Config';
import { AuthContext } from '../../../Context/Auth';
import useInput from './../../../../Hooks/useInput';
import { RegisterStyle, ButtonStyle } from './RegisterStyle';
import { InputSection } from '../Login/LoginStyle';
import { Link } from 'react-router-dom';
const Register = () => {

    const navigate = useNavigate();
    const first_name = useInput('');
    const last_name = useInput('');
    const email = useInput('');
    const password = useInput('');
    const passwordConfirm = useInput('');

    const { url } = useContext(ConfigContext);
    const { user, login } = useContext(AuthContext);

    // console.log(password.value, passwordConfirm.value);
    const SignUp = (e) => {
        e.preventDefault();

        if (password.value === passwordConfirm.value) {
            fetch(`${url.backend}/api/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    first_name: first_name.value,
                    last_name: last_name.value,
                    email: email.value,
                    password: password.value,
                    password_confirmation: passwordConfirm.value
                })
            })
                .then((resp) => {
                    if (resp.ok) {
                        navigate('/');

                        return resp.json();
                    } else {
                        alert('error');
                    }
                })
                .then(() => {
                    fetch(`${url.backend}/api/users/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: email.value,
                            password: password.value
                        })
                    })
                        .then((resp) => resp.json())
                        .then((data) => {
                                
                            login(data.data.first_name,data.data.last_name, data.token,  data.data.id)
                            navigate('/')    
                                  
                        });
                });
        }
    };

    return (
            <RegisterStyle onSubmit={SignUp} className='form-custom'>
                    <InputSection className="mb-5 flex flex-col">
                        <h1 className={`text-black font-bold text-2xl mb-2 mt-3`}>Register</h1>
                        <label className="form-label mb-2" htmlFor="userName">
                            Enter your First Name
                        </label>
                        <input type="text" id="userName" {...first_name} />
                    </InputSection>
                    <InputSection className="mb-5 flex flex-col">
                        <label className="form-label mb-2" htmlFor="userName">
                            Enter your Last Name
                        </label>
                        <input type="text" id="userName" {...last_name} />
                    </InputSection>
                    <InputSection className="mb-5 flex flex-col">
                        <label className="form-label mb-2" htmlFor="userMail">
                            Enter your Email
                        </label>
                        <input type="email" id="userMail" {...email}/>
                    </InputSection>
                    <InputSection className="mb-5 flex flex-col">
                        <label className="form-label mb-2 font-light" htmlFor="userPassword">
                            Enter a new Password
                        </label>
                        <input type="password" id="userPassword" {...password}/>
                    </InputSection>
                    <InputSection className="flex flex-col">
                        <label
                            className="form-label mb-2"
                            htmlFor="userPasswordConfirm"
                        >
                            Confirm the entered Password
                        </label>
                        <input
                            type="password"
                            id="userPasswordConfirm"
                            {...passwordConfirm}
                        />
                       <ButtonStyle type="submit">Register</ButtonStyle>
                       <Link to='/login' className="pt-2 text-sm">Did you registerd already? Please Login!</Link>
                    </InputSection>

            </RegisterStyle>
            
    );
};

export default Register;
