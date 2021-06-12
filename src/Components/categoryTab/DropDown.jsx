import React from 'react';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import './DropDown.css';


const DropDown = ({ category }) => {
    let catName=category.name.replace(/ |&|,/g, "")
    const menu2 = category.subSubCat.map((subCat) => {
    let subCatName=subCat.name.replace(/ |&|,/g, "")

    return (
      <Menu.Item className='hoverSubCat'>
        <Link to={`/${catName}/${subCatName}`} rel='noopener noreferrer'>
          {subCat.name}
        </Link>
      </Menu.Item>
    );
  });


  const menu = <Menu className='dMenu'>{menu2}</Menu>;

  return (
    <Dropdown overlay={menu}>
      <Link to={`/${catName}`} className='ant-dropdown-link catLink'>
        {<span className='CatTitle'>{category.name}</span>}
      </Link>
    </Dropdown>
  );
};

export default DropDown;

