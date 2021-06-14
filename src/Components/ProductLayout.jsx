import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Route} from 'react-router-dom'
import ButtonplusIcon from '../Icons/ButtonplusIcon';
import { getProducts, getCategoryDetails } from '../Redux/Products/actions';
import { SortBar } from './index';

import '../App.css';
import { SideCatBar } from './index';

const ProductLayout = ({ match, mainCat }) => {

const initialState=""
const [state, setstate] = useState(initialState)
const [sort, setSort] = useState({ property: '', order: '' });

const dynamicLink = match && match.params.id;
const dispatch = useDispatch();
const { products } = useSelector((state) => state.state);

useEffect(() => {



    dispatch(getProducts(sort, mainCat));
    dispatch(getCategoryDetails());

  

}, [dispatch,sort,mainCat]);




  return (
    <div className='content-container'>
      <section className='bread-crumbs'>breadcrumbs</section>
      <section className='side-bar'>
        <SideCatBar  />
      </section>
      <section>
          
    <div className='products-display'>
      {dynamicLink && <h1>{dynamicLink}</h1>}
      <section>
        <img
          src='https://www.jiomart.com/images/category/229/fresh-vegetables-20200704.jpg'
          alt='Category Title'
        />
      </section>
      <section>
        <SortBar sortProcess={setSort} />
      </section>
      <section>
        <h1>All Products</h1>
        <div className='p-cards'>
          {products.map((product) => {
            return (
              <div className='card'>
                <section style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={product.image}
                    alt='pImage'
                    style={{
                      textAlign: 'center',
                      width: '150px',
                      height: '150px',
                    }}
                  />
                </section>

                <section style={{ alignSelf: 'end' }}>
                  <section>
                    <p>{product.title}</p>
                  </section>
                  <section>
                    <p>
                      <span
                        style={{ fontSize: '13px', fontFamily: 'jioLight' }}
                      >
                        MRP:{' '}
                      </span>
                      <span style={{ fontSize: '16px' }}>
                        &#8377; {product.cost}
                      </span>
                    </p>
                  </section>
                  <section>
                    <button>
                      <span>Add to cart</span>
                      <span style={{ float: 'right' }}>
                        <ButtonplusIcon />
                      </span>
                    </button>
                  </section>
                </section>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  
      </section>
    </div>
  );
};

export default ProductLayout;
