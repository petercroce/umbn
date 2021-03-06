import React from 'react';
import Radium from 'radium';
// import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import '../../index.css';
import wordmark from '../../imgs/umbn-wordmark.svg';

// const NavLink = Radium(ReactRouterNavLink);
// this isn't working: https://github.com/FormidableLabs/radium/issues/398

function Navigation() {
  return (
    <div>
      <img src={wordmark} style={styles.wordmark} alt="UMBN Wordmark"/>
    </div>
  )
}

const styles = {
  wordmark: {
    height: 50,
    position: 'absolute',
    top: 30,
    left: 30,
    '@media (max-width: 649px)': { // mobile medium
      height: 35,

      top: 20,

      left: 20,

    },
    '@media (max-width: 480px)': {
      height: 27,
      top: 10,
      left: 10,
    },
  },
  hamburgerMenu: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 30,
    marginRight: 40,
  },
  navItems: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    // borderBottom: '2px dashed rgba(0,0,0,0.2)',
  },
  navItem: {
    display: 'flex',
    alignSelf: 'center',
    textDecoration: 'none',
    margin: 10,
    fontFamily: 'Lato-Medium, sans-serif',
  },
}

export default Radium(Navigation);
