import React from 'react';
import './cart-dropdown.style.scss';
import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../../cart-items/cart-item.component';
import {connect} from 'react-redux';
import{withRouter} from 'react-router-dom';
import {selectCartItems} from '../../../redux/cart/cart-selector';
import {toggleCartHidden} from '../../../redux/cart/cart.action';


const cart = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.length?(
            cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
        ):(
            <span className='empty-message'> GO TO CHECKOUT</span>
        )}
          <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    > GO TO CHECKOUT
    </CustomButton>

        </div>
    </div>
);
const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
  });

  export default withRouter(connect(mapStateToProps)(cart));