import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1 className="header">GreenThumb</h1>
      <div className="flex-ctr-ctr">
        <h3 className="section-heading">Plant Care at your Fingertips</h3>
      </div>
      <div>
            <img className='img-home' src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80" alt="Plant"/>
        </div>
        <br/>
      {showLogin ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
      }
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Don\'t have an account? SIGN UP!' : 'Already signed up? LOG IN!'}</button>
        <h4 className="section-heading">GreenThumb is a plant care app that keeps your plants alive with a countdown to your plants' next watering date!</h4>
    </main>
  );
}