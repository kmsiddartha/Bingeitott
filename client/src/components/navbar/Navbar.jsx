import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img
            className='logo'
            src='https://i.ibb.co/cxRRTn0/f2ed8c654231d8ef052b0e722652ca51.png'
            alt=''
          />
          {/* <span className='title'>BINGE IT</span> */}
          <Link to='/' className='link'>
            <span>Homepage</span>
          </Link>
          <Link to='/series' className='link'>
            <span className='navbarmainLinks'>Series</span>
          </Link>
          <Link to='/movies' className='link'>
            <span className='navbarmainLinks'>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img
            className='img2'
            src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
          />
          <div className='profile'>
            <ArrowDropDown className='icon' />
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
