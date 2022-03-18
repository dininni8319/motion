import { Link } from 'react-router-dom';
import { useState, useRef }  from 'react';
import { useNavigate } from 'react-router';

const AddPost = () => {
    const navigate = useNavigate()
    const [ content , setContent ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:8000/api/users/add-post', {
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({
                content: content,
            })
        })
            .then( resp => {
                if (resp.ok) {
                   alert('Your data has been posted!')
                   navigate('/')
                } else {
                    alert('Oppsss...')
                }
            })
    }

    return (
        <form onSubmit={handleSubmit} className="p-5 d-flex flex-column">
            <div className="p-5 d-flex flex-column">
                <label htmlFor="">Content</label>
                <input type="text" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value) }
                />
            </div>
            <div className="p-5 d-flex flex-column">
                <label htmlFor="">Image</label>
                <input type="file" />
            </div>
           <Link to='/'>Go back!</Link>
           <button type='submit'>Submit</button>
        </form>
    )
}

export default AddPost;