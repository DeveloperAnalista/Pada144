import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../components/Button/Button'
import { FaBeer } from 'react-icons/fa';

function TipoLogin() {
  

  return (
    <div className='blue-container'>
      <form>
      <NavLink to='/login'><Button title='Médico' color='primary'><FaBeer />Médico</Button></NavLink>
      <NavLink to='/login'><Button title='Paciente' color='secondary'>Paciente</Button></NavLink>
      </form>      
    </div>
  )
}

export default TipoLogin;