import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './SideNavBar.css';
import CloseIcon from '@material-ui/icons/Close';
import UserAvatar from '../../Icons/UserAvatar';

const SideNavBar = ({ sideBarVisible, setSideBarVisible }) => {
  let closeBar = () => {
    setSideBarVisible(false);
  };
  return (
    <div
      className={sideBarVisible ? 'sideBarContainerActive' : 'sideBarContainer'}
    >
      <div className='sidebar'>
        <section className='sideBarsects'>
          <div>
            <UserAvatar />
            <Link>Hello, Sign In</Link>
            <CloseIcon onClick={closeBar} style={{ cursor: 'pointer' }} />
          </div>
          <div>
            <Link onClick={closeBar}> Account </Link>
            <Link onClick={closeBar}> Orders </Link>
          </div>
        </section>

        <div className='sectionOverflow'>
          <section className='sideBarsects'>
            <ul>
              <li>
                <Link onClick={closeBar}>Home</Link>
              </li>
              <li>
                <Link onClick={closeBar}>Shop by Category</Link>
              </li>
              <li>
                <Link onClick={closeBar}>My List</Link>
              </li>
              <li>
                <Link onClick={closeBar}>My Subscription</Link>
              </li>
              <li>
                <Link onClick={closeBar}>JioMart Wallet</Link>
              </li>
              <li>
                <Link onClick={closeBar}>All Offers</Link>
              </li>
            </ul>
          </section>

          <section className='sideBarsects'>
            <ul>
              <Link onClick={closeBar}>
                <li> My Account </li>
              </Link>
              <Link onClick={closeBar}>
                <li> Need Help </li>
              </Link>
              <Link onClick={closeBar}>
                <li> About us </li>
              </Link>
              <Link onClick={closeBar}>
                <li> Guide </li>
              </Link>
            </ul>
          </section>
          <section className='sideBarsects'>
            <div className='hmenu_contact'>
              <h1 style={{ textAlign: 'left' }}>Contact Us</h1>
              <span class='mail_txt'>
                WhatsApp us :
                <a
                  href='https://wa.me/917000370003?text=Hi'
                  target='_blank'
                  rel='noopener'
                >
                  70003 70003
                </a>
              </span>
              <br />
              <span class='mail_txt'>
                <span class='mail_txt'>
                  Call Us :
                  <a href='tel:1800 890 1222' target='_blank' rel='noopener'>
                    1800 890 1222
                  </a>
                  <br />
                </span>
              </span>
              <p>6:00 AM to 8:00 PM, 365 days</p>
              <p class='textmsg1'>
                Please note that you are accessing the BETA Version of
                <a href='https://www.jiomart.com/' style={{ color: '#008ecc' }}>
                  www.jiomart.com
                </a>
              </p>
              <p class='textmsg2'>
                Should you encounter any bugs, glitches, lack of functionality,
                delayed deliveries, billing errors or other problems on the beta
                website, please email us on
                <a href='mailto:cs@jiomart.com' style={{ color: '#008ecc' }}>
                  cs@jiomart.com
                </a>
              </p>
              <h1 style={{textAlign:"left"}}>Download App</h1>
              <a
                href='https://play.google.com/store/apps/details?id=com.jpl.jiomart'
                target='_blank'
                rel='noopener'
              >
                <img
                  src='https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png'
                  alt='Download Jiomart App for Android from Play Store'
                />
              </a>
              <a
                href='https://apps.apple.com/in/app/jiomart/id1522085683'
                target='_blank'
                rel='noopener'
              >
                <img
                  src='https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png'
                  alt='Download Jiomart App for iOs from App Store'
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
