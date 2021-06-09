import React from 'react';
import DropDown from './DropDown';
import './TopCatBar.css';
import {categoriesData} from "../../Services/data"

const TopCatBar = () => {

  const mainCategory = categoriesData.categories[0].subCat.map((cat) => {
    return <DropDown category={cat} />;
  });

  return (
    <div className="topBarContainer">
        <div className="topBar">
            <img src="https://www.jiomart.com/assets/version1620668133/smartweb/images/icons/location-on.svg" alt="Location Icon" />
             <span>Deliver to<span className="pincode"> 433333</span></span>
          {mainCategory}
        </div>
    </div>
  );
};

export default TopCatBar;
