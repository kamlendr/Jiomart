import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import MinusButton from '../../Icons/MinusButton';
import PlusButton from '../../Icons/PlusButton';
import './JioButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../../Redux/Products/actions';

export const PlusMinusBtn = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cartItems);
  let quantity = cart[product.id] && cart[product.id].quantity;
  return (
    <div className='plusMinusBtn'>
      <span style={{cursor:"pointer"}}
        onClick={() =>
          dispatch(updateCart({ product, quantity: quantity - 1 }))
        }
      >
        <MinusButton />
      </span>
      <h3 className='order-nums'>{quantity}</h3>
      <span style={{cursor:"pointer"}} onClick={() => dispatch(updateCart({ product, quantity: quantity + 1 }))}>
        <PlusButton size={32} />
      </span>
    </div>
  );
};

export const JioButton = ({ showInfo, myProduct }) => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div className='btnStyle'>
        <span className="btnText">Add to Cart</span> <PlusButton size={25} />
      </div>
    </animated.div>
  );
};
