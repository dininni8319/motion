import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import useInput from './../../../Hooks/useInput';
import { AuthContext } from '../../Context/Auth';
import { ConfigContext } from '../../Context/Config';
import axios from 'axios';

const FormComment = ({ id }) => {
    const comment = useInput('');
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const { url } = useContext(ConfigContext)
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        const formatData = new FormData();
        formatData.append('comment', comment.value);

        const config = { 
            headers: { Authorization: `Bearer ${user.token}` }    
        }

        axios.post(`${url.backend}/api/users/add-comment/${id}`,
        formatData, 
        config,
        ).then(resp => {

            if (resp.status === 200) {
                alert('Your message is been delivered');
                comment.setValue('')
            } else {
                console.log(resp);
            }
        })
    }

    return ( 
      <form onSubmit={handleSubmit}> 
        <section>
            <input type="text" {...comment}/>
        </section>
        <button type="submit">
            Send
        </button>
      </form>
     );
}
 
export default FormComment;