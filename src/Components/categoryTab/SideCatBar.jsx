import React, { useEffect } from 'react';
import { Collapse, Checkbox, Row, Col } from 'antd';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { categoriesData } from '../../Services/data';
import './SideCatBar.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const { Panel } = Collapse;

// const plainOptions = ['Apple', 'Pear', 'Orange'];
// const options = [
//   { label: 'Apple', value: 'Apple' },
//   { label: 'Pear', value: 'Pear' },
//   { label: 'Orange', value: 'Orange' },
// ];
const SideCatBar = () => {
  const mainCat = useSelector((store) => store.currentCat);
const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)

  const cats = [
    'Fruits & Vegetables',
    'Dairy & Bakery',
    'Staples',
    'Snacks & Branded Foods',
    'Beverages',
    'Personal Care',
    'Home Care',
    'Baby Care',
    'Home & Kitchen',
  ];
  let actKey= cats.indexOf(mainCat)
  const mainCategory = categoriesData.categories[0].subCat.map((cat, ind) => {
    const subCats = cat.subSubCat.map((subCat) => {
      return <li>{subCat.name} </li>;
    });
    return (
      <Panel
      style={{ fontFamily: 'jioLight', fontSize: '16px' }}
        header={cat.name}
        key={ind}
        >
        <ul style={{ fontSize: '14px', paddingLeft: '23px' }}>{subCats}</ul>
      </Panel>
    );
  });
  function setActiveKey(key) {
    console.log(key);
  }
  
  useEffect(() => {
    
    setCurrentCategoryIndex()
  }, []);

  return (
    <div className='colllapseContainer'>
      <h1>Categories</h1>
      <Collapse
        style={{ background: 'white' }}
        defaultActiveKey={[actKey]}
        onChange={setActiveKey}
      >
        {mainCategory}
      </Collapse>

      <h1>Filter</h1>

      <Collapse style={{ padding: '10px 24px' }}>
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
          <span style={{ fontSize: '16px' }}>Categories</span>
          <Row>
            <Col span={24}>
              <Checkbox value='A'>Apples</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value='B'>Mangoes</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value='C'>Brinjal</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value='D'>Cucumber</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value='E'>Gourds</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
          <span style={{ fontSize: '16px' }}>Brands</span>
          <Row>
            <Col span={24}>
              <Checkbox value='A'>A</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value='B'>B</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value='C'>C</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value='D'>D</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value='E'>E</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>

        <div>
          Price
          <Range />
        </div>
      </Collapse>
    </div>
  );
};

export default SideCatBar;
