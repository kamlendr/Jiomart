import React from 'react';
import { Input } from 'antd';
import axios from 'axios';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "./SearchBar.css"
import { InputLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const SearchBar = () => {
  const [state, setstate] = React.useState([]);
  const [input, setinput] = React.useState("");
const history = useHistory()
React.useEffect(() => {
    const changeHandle = async (input) => {
    
        const { data } = await axios.get(
          `http://localhost:3004/products?q=${input}`
        );
        setstate(data);
      }
       (input) && changeHandle(input)
        return () => {
        setstate([])
    }
}, [input])

  // const changeHandle= async (e)=>{
  //     const data=axios.get()
  // }
  const results = state.map((product) => {
    return <li onClick={()=>console.log(product.id)} key={product.id} style={{display:"flex", 
    justifyContent:"flex-start", margin:"20px"
    }}>
        <img style={{height:"25px", marginRight:"15px"}} src={product.image} alt="" />
        <p>{product.title}</p>
        </li>;
  });
  useEffect(() => {
window.document.addEventListener('click', ()=>{setstate([])})
return ()=>{
    window.document.removeEventListener('click',()=>{setstate([])})

}

  }, [])

  return (
    <div className="searchBar">
      <div className="inputField">
          <Input.Search
            size='large'
            placeholder='Search essentials, groceries, and more ...'
            value={input}
            onChange={(e)=>setinput(e.target.value)}
            enterButton
            onSearch={(e) =>{ history.push(`/search/${e}`); setstate([])}}
          
          />
      </div>
      <div className="searchSuggest">
        <ul>{results}</ul>
      </div>
    </div>
  );
};

export default SearchBar;
