import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './Login.css'

const Login = () => {
  const { setCurrentUser } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  /* Local Storage */
  const onSubmit = (data) => {
    localStorage.setItem('currentUser', JSON.stringify(data))
    setCurrentUser(data)
    navigate('/')
  }

  return (
    <div className='signupFrm'>
       <div class="wrapper">
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title">Sign up...</h1>
      <div className="inputContainer">
        <input
          className='input'
          type="text"
          placeholder='a'
          {...register('username', {
              required : ' '
            }
          )
        } />
        <label for="" className="label">Username</label>
                
        </div>
        <div className="inputContainer">
        <input
          className='input'
          type='password'
          placeholder='Password'
          {...register(
              'password',
              {
                required : ' '
              }
            )
          }
        />
       <label for="" className="label">Password</label>
       
        </div>
         <button className='submitBtn' type='submit'>Sign Up</button>
      </form>
      </div>
    </div>
  
   
  
  )
}

export default Login; 