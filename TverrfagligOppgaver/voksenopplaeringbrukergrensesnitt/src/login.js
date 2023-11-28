import './App.css'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const [errors , setErrors] = useState({
        
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    
    if ( errors.email === '' && errors.password === '') {
        axios
          .post('http://localhost:8081/login', values)
          .then((res) => {
            if (res.data === true) {
              history('/home');
            } else {
                alert('Bruker finnes ikke');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    

    return ( 
                <form action="" onSubmit={handleInput}>
                <div className='login-labels'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        onChange={handleInput}
                        name="email"
                    />  
                    <span>{errors.email && <p className='text-danger'>{errors.email}</p>}</span>
                    <label htmlFor="password">Passord:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={handleInput}
                        name="password"
                    />
                       <span>{errors.password && <p className='text-danger'>{errors.password}</p>}</span>
                    <button type="submit" onClick={handleSubmit}>Logg inn</button>

                    <Link to='/Signup'>Registrer deg</Link>
                </div>
                </form>
    )
};