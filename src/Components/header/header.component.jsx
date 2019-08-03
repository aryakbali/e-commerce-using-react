import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../Components/firebase/firebase.util';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {connect} from 'react-redux';
import CartItem from '../cart-icon/cart-item.component';
import Cart from '../../Components/cart/cart-dropdown/cart-dropdown.componenty';

import './header.style.scss';

const Header = ({currentUser,hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <Link className='title-container' to='/'>
    <div className='title'>
     Designer Hood
    </div>
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
    {
      currentUser?(
    <div className='options' onClick={()=> auth.signOut()} >SIGN OUT</div>)
    :(
    <Link className='option' to='/signin'>SIGN IN</Link>
    )}
  <CartItem/>
    </div>
    {
      hidden? null:
    <Cart/>
    }
  </div>
);

const mapStaeToProps = ({user:{currentUser},cart:{hidden}})=>({       //this state will be a root state//
  currentUser,
  hidden  //rootstate.userreducer.currentuser//
})

export default connect(mapStaeToProps)(Header);