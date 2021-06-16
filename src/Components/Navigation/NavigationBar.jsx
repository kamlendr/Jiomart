import React, { useContext, useEffect, useState } from 'react';
import { Input, AutoComplete, section, Row, Popover, Button } from 'antd';
import 'antd/dist/antd.css';
import Logo from '../../Icons/Logo';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import UserAvatar2 from '../../Icons/UserAvatar2';
import BurgerMenu from '../../Icons/BurgerMenu';
import './NavigationBar.css';
import { SearchBar } from '../index';
import { getProducts, searchProducts } from '../../Redux/Products/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../Context/ContextProvider';
import { useRef } from 'react';
const { Option } = AutoComplete;

const NavigationBar = ({ setSideBarVisible }) => {
  const { cartPopUpVisible, setcartPopUpVisible } = useContext(Context);
  const [cartDetails, setCartDetails] = useState({
    totalItems: 0,
    bill: 0,
    latestTwoAdditions: [],
    savings: 0,
  });
  useEffect(() => {
    const timeOutID= setTimeout(() => setcartPopUpVisible(false), 4000)
    return () => {
      clearTimeout(timeOutID);
    };
  }, [cartPopUpVisible, setcartPopUpVisible]);

  const { cart, cartHistory } = useSelector((store) => ({
    cart: store.cart.cartItems,
    cartHistory: store.cart.additionHistory,
  }));
  useEffect(() => {
    let bill = 0;
    let itemCount = 0;
    let tempSavings = 0;
    let latestaddtions = [
      cart[cartHistory[cartHistory.length - 2]],
      cart[cartHistory[cartHistory.length - 1]],
    ];
    if (cart) {
      for (let x in cart) {
        let mrp = cart[x].product.mrp;
        if (!mrp) {
          mrp = cart[x].product.cost;
        }
        tempSavings += cart[x].quantity * mrp;
        bill += cart[x].quantity * cart[x].product.cost;
        itemCount = itemCount + 1;
      }
    }
    setCartDetails({
      totalItems: itemCount,
      bill: bill.toFixed(2),
      latestTwoAdditions: latestaddtions,
      savings: tempSavings,
    });
  }, [cart, cartHistory]);

  const content = (
    <div className='cart-popup'>
      {cartDetails.latestTwoAdditions[1] && (
        <div>
          <p >
            {cartDetails.latestTwoAdditions[1].product.title
              }
          </p>
          <p >
            ₹ {cartDetails.latestTwoAdditions[1].product.cost} x
            {cartDetails.latestTwoAdditions[1].quantity}
          </p>
        </div>
      )}
      {cartDetails.latestTwoAdditions[0] && (
        <div>
          <p >
            {cartDetails.latestTwoAdditions[0].product.title
              }
          </p>
          <p>
            ₹ {cartDetails.latestTwoAdditions[0].product.cost} x
            {cartDetails.latestTwoAdditions[0].quantity}
          </p>
        </div>
      )}
      <div>
        <div></div>
        {cartDetails.totalItems - 2 > 0 && (
          <p>{cartDetails.totalItems - 2} more items</p>
        )}
      </div>
      <div>
        <div>
          <p style={{ fontFamily: 'jioBold' }}>₹ {cartDetails.bill}</p>
          {cartDetails.savings - cartDetails.bill > 0 && (
            <p style={{ color: 'green', fontFamily: 'jioBold' }}>
              You Save ₹ {(cartDetails.savings - cartDetails.bill).toFixed(2)}
            </p>
          )}
        </div>
        {/* <div style={{ width: '50px' }}></div> */}
        <button>PROCEED TO CART</button>
      </div>
    </div>
  );
  const popupTitle = (
    <div
      classname='popupTitle'
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <p style={{ margin: 0 }}>ORDER SUMMARY</p>
      <p style={{ margin: 0 }}>item(s)</p>
    </div>
  );

  return (
    <div className='navBox' style={{ position: 'sticky', top: '0' }}>
      <nav>
        <section
          className='sideMenuOpener'
          onClick={() => setSideBarVisible(true)}
        >
          <BurgerMenu />
        </section>
        <section className='logoJio'>
          <Logo />
        </section>
        <section className='search'>
          <SearchBar />
        </section>
        <section className='userInfo'>
          <UserAvatar2 />
          <span className='cart-text'>Sign in / Sign Up</span>
        </section>
        <Popover
          content={content}
          mouseEnterDelay={2}
          placement='bottomRight'
          visible={cartPopUpVisible}
          overlayStyle={{ paddingTop: '-60px', position: 'fixed' }}
          title={popupTitle}
        >
          <section className='cart' onMouseEnter={()=>setcartPopUpVisible(true)}>
            <div>
              {cartDetails.totalItems > 0 && (
                <div
                  style={{
                    marginBottom: '-5px',
                    background: 'red',
                    padding: 0,
                    textAlign: 'center',
                    width: '20px',
                    height: '20px',
                    borderRadius: '10px',
                  }}
                >
                  {cartDetails.totalItems}
                </div>
              )}
              <ShoppingCartIcon />
            </div>
            <span className='cart-text'>Cart</span>
          </section>
        </Popover>
      </nav>
    </div>
  );
};

export default NavigationBar;
