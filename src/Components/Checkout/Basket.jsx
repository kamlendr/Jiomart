import React from 'react';
import './Basket.css';
import { PlusMinusBtn } from '../index';
const Basket = ({ cartDetails }) => {

  const cards = cartDetails.products.map((product) => {
    return (
      <div className='cart-cards'>
        <div>
          <img src={product.image} alt='pr-i' />
        </div>
        <div>
          <section style={{ fontFamily: 'jioMedium', fontSize: '16px' }}>
            <p>{product.title}</p>
          </section>
          <section>
            <p>
              <span style={{ fontFamily: 'jioMedium', fontSize: '18px' }}>
                &#8377; {product.cost}
              </span>
              <span>
                {product.discount && (
                  <span className='mrp'>
                    MRP:{' '}
                    {
                      <span style={{ textDecoration: 'line-through' }}>
                        &#8377; {product.mrp}
                      </span>
                    }{' '}
                  </span>
                )}
              </span>
            </p>
          </section>
          <section style={{ textAlig: 'right' }}>
            <PlusMinusBtn product={product} />
          </section>
        </div>
      </div>
    );
  });

  return (
    <div className='cart-item-section'>
      <div className='basket-title'>
        <section>{`Groceries Basket (${cartDetails.totalItems} items) `}</section>
        <section>₹{cartDetails.bill}</section>
      </div>
      {cards}
    </div>
  );
};

export default Basket;
