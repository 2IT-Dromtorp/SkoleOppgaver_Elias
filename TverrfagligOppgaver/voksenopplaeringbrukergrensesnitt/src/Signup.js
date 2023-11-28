import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignUpValidation';
import { useState } from 'react';
import axios from 'axios';

//install axios og cors

// ... (import statements remain unchanged)

export default function Signup() {
        const [values, setValues] = useState({
          navn: '',
          email: '',
          password: '',
        });
      
        const navigate = useNavigate();
        const [errors, setErrors] = useState({});
      
        const handleSubmit = (event) => {
          event.preventDefault();
          setErrors(Validation(values));
      
          if (errors.navn === '' && errors.email === '' && errors.password === '') {
            axios
              .post('http://localhost:8081/signup', values)
              .then((res) => {
                navigate('/login');
              })
              .catch((err) => {
                console.log(err);
              });
          }
        };
      
        const handleInput = (event) => {
          setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        };
      
        return (
          <div className='login-outbox'>
            <div className='login-box'>
              <form onSubmit={handleSubmit}>
                <div className='login-labels'>
                  <label htmlFor="navn">Navn:</label>
                  <input
                    type="text"
                    id="navn"
                    name="navn"
                    onChange={handleInput}
                  />
                  <span>{errors.navn && <p className='text-danger'>{errors.navn}</p>}</span>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInput}
                  />
                  <span>{errors.email && <p className='text-danger'>{errors.email}</p>}</span>
                  <label htmlFor="password">Passord:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleInput}
                  />
                  <span>{errors.password && <p className='text-danger'>{errors.password}</p>}</span>
                  <button type="submit">Logg inn</button>
                  <Link to='/login'>Login</Link>
                </div>
              </form>
            </div>
          </div>
        );
      }
      