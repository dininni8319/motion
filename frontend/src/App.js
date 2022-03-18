import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  
  useEffect(() => {
    fetch('http://localhost:8000/api/posts')
      .then(resp => resp.json())
      .then(data => console.log(data, 'hello from the backend'))
  },[])
  
  return (
    <section>
       <section>
         <h1>All Post</h1>
         <Link to='/add-post'>Add a post</Link>
       </section>
    </section> 
  )
}

export default App;
