import { useState, useContext, createContext } from 'react';
import { ConfigContext } from '../Config/index';

export const AuthContext = createContext();

export function AuthProvider(props) {
    const initialUser = localStorage.getItem('user');

    const [user, setUser] = useState(JSON.parse(initialUser));
    const { url } = useContext(ConfigContext);
    
    const login = (first_name, last_name, token, id) => {
        const obj = {
            first_name: first_name,
            last_name: last_name,
            token: token,
            id: id
        };

        setUser(obj);
        localStorage.setItem('user', JSON.stringify(obj));
    };

    const logout = () => {
        fetch(`${url.backend}/api/users/logout`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then(() => {
            localStorage.removeItem('user');
            setUser(null);
        });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}
