import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import weatherLogo from '../../assets/logo.png';
import './Navigation.css';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

   /* Local Storage */
  useEffect(() => {
    const userStored = localStorage.getItem('currentUser')
    console.log({userStored})
    if (userStored) {
      setCurrentUser(JSON.parse(userStored))
    }
  }, [])

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <>
    <p className='title_card'>Location Cards</p>
    <div className='navigation'>
      
      <div className='logo-container' >
        <img src={ weatherLogo } alt='Logo' className='logo' />
        
      </div>
            
      <div className='nav-links-container'>
      
        {currentUser ? (
          <Link className='nav-link' to='/location/create'>
            New Location
          </Link>
        ) : (
          <span className='nav-link'>New Location</span>
        )}

        {currentUser ? (
          <span className='nav-link sign-in' onClick={handleSignOut}>
            Log Out
          </span>
        ) : (
          <Link className='nav-link sign-in' to='/login'>
            Sign Up
          </Link>
        )}
      </div>
    </div>
    <Outlet />
  </>
);
};
  
export default Navigation;