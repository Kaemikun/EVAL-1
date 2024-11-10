import React, { useEffect } from 'react';
import './styles2.css';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, person, close, menu, search } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom'; 

const AnimaxMain = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    registerLink.addEventListener('click', () => {
      wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
      wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
      wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
      wrapper.classList.remove('active-popup');
    });

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    return () => {
      registerLink.removeEventListener('click', () => {
        wrapper.classList.add('active');
      });

      loginLink.removeEventListener('click', () => {
        wrapper.classList.remove('active');
      });

      btnPopup.removeEventListener('click', () => {
        wrapper.classList.add('active-popup');
      });

      iconClose.removeEventListener('click', () => {
        wrapper.classList.remove('active-popup');
      });

      menuToggle.removeEventListener('click', () => {
        menu.classList.toggle('active');
      });
    };
  }, []);

  const handleSearchChange = (event) => {
    window.location.href = event.target.value;
  };

  const handleLogin = (event) => {
    event.preventDefault(); 
    
    
    navigate('/home'); 
  };

  return (
    <div>
      <header>
        <h2 className="logo">
          <a href="#">
            <img src="./bg.png" style={{ height: '7vh' }} alt="Logo" />
          </a>
        </h2>
        <nav className="navigation">
          <ul id="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Genre</a></li>
            <li>
              <div className="search-bar">
                <input type="list" list="browsers" placeholder="Search..." onChange={handleSearchChange} />
                <datalist id="browsers">
                  <option value="codegeass.html">Code Geass</option>
                  <option value="rimuru.html">That time I got reincarnated as a Slime</option>
                  <option value="aot.html">Attack On Titans</option>
                  <option value="yourname.html">Your Name</option>
                </datalist>
                <span className="search-icon"><IonIcon icon={search} /></span>
              </div>
            </li>
            <li><button className="btnLogin-popup">Login</button></li>
          </ul>
          <div className="menu-toggle" id="menuToggle">
            <IonIcon icon={menu} />
          </div>
        </nav>
      </header>

      <div className="wrapper">
        <span className="icon-close">
          <IonIcon icon={close} />
        </span>
        <div className="form-box login">
          <h2>Login</h2>
          <form onSubmit={handleLogin}> 
            <div className="input-box">
              <span className="icon"><IonIcon icon={mail} /></span>
              <input type="email" required />
              <label>Email</label>
            </div>

            <div className="input-box">
              <span className="icon"><IonIcon icon={lockClosed} /></span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember Me</label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>

            <div className="login-register">
              <p>Don't have an account? <a href="#" className="register-link">Register</a></p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon"><IonIcon icon={person} /></span>
              <input type="text" required />
              <label>Username</label>
            </div>

            <div className="input-box">
              <span className="icon"><IonIcon icon={mail} /></span>
              <input type="email" required />
              <label>Email</label>
            </div>

            <div className="input-box">
              <span className="icon"><IonIcon icon={lockClosed} /></span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />I agree to the terms & conditions</label>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>

            <div className="login-register">
              <p>Already have an account? <a href="#" className="login-link">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnimaxMain;
