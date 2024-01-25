import './App.css'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';


export default function Login() {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
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

        if ( errors.email === '' && errors.password === '') {
            axios
              .post('/login', values)
              .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  history('/');
                } else {
                    alert('Bruker finnes ikke');
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }

    }

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    

    

    return ( 
            <form action="" onSubmit={handleInput}>
                <h1 className='center'>Logg inn</h1>
                <div className='login-labels'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        onChange={handleInput}
                        name="email"
                        className='user-pass-label'
                        placeholder='Your email here'
                    />  
                    <span>{errors.email && <p className='text-danger'>{errors.email}</p>}</span>
                    <label htmlFor="password" >Passord</label>
                    <input
                        className='user-pass-label'
                        type="password"
                        id="password"
                        onChange={handleInput}
                        name="password"
                        placeholder='Your password here'
                        required={true}
                    />

                       <span>{errors.password && <p className='text-danger'>{errors.password}</p>}</span>
                    <br></br>
                    <button type="submit" onClick={handleSubmit} className='LesMer' >Registrer deg</button>
                    <br></br>
                    <Link to='/Signup' className='login-2'>Registrer deg</Link>
                </div>
                </form>
    )
};