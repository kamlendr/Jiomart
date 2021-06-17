import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { singleProduct } from '../../Redux/SingleProduct/action';
import "../CSS/SingleProduct.css"
import axios from "axios"
import Modal from '@material-ui/core/Modal';
import CheckIcon from '@material-ui/icons/Check';
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
import styled from 'styled-components';
import { GetData, Setdata } from '../Utils/localStorage';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: 'absolute',
    width: 350,
    height: 30,
    marginTop:200,
    backgroundColor: "black",
    border: '1px solid #000',
    padding: theme.spacing(2, 4, 3),
  },
 
}));
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  
function SingleProduct() {
  //Rating
    const [rate, setRate] = React.useState(0);

    const classes = useStyles();

    //Modal
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title"></h2>
          <p id="simple-modal-description" 
          style={{marginTop:-20,backgroundColor:"black",color:"white"}}>
           <CheckIcon /> Product added to WishList Successfully
          </p>
        </div>
      );
    
        //
    const [wishList,setWishList] = React.useState("")

    const {category,id} = useParams()

    const dispatch = useDispatch()
    
    const handleGet = ()=>{
        dispatch(singleProduct(category,id))
    }

    React.useEffect(()=>{
       handleGet()
    },[])

    const {data} = useSelector((state)=>state.singleProduct)
    //console.log(data)

  //WishList
  const handleAdd = () =>{
    // eslint-disable-next-line array-callback-return
    const upDate = data.map((item)=>{
        if(item.id === id){
         return item
        } 
        return undefined
    })
    console.log("Hello")
    Setdata("wishlist",upDate)
    setWishList(upDate)
    alert("Product Added to WishList Successfully")
  }

  return (

    <div className={classes.root}>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>

        {
            data.map((item)=>{
              return  <Grid container spacing={1} key={item.id}>
                <Grid item md={5} sm={12} xs={12} >
                    <div className="logo-div">
                        <img src="https://www.jiomart.com/assets/jiomsite/images/icons/new-veg.svg" />
                        </div>
                    <div className="image-div"> 
                         <img src={item.image} />  
                    </div>
                </Grid>
                <Grid item md={7} sm={12} xs={12} >
                      <div className="content-div">
                          <h3 className="title-div">{item.title}</h3>
                          <div className="mrp-div">
                            <span>M.R.P : </span> 
                            <h3>₹ {item.cost}</h3> 
                            <p className="taxes-text">
                                Inclusive of all taxes</p> 
                             <button onClick={handleAdd && handleOpen} type="button" className="wishlist">
                             </button>
                          </div>
                          <h6 className="stock-green">In Stock</h6>
                          <div className="soldby-div">
                                <span>Sold by</span> 
                                <h6> Reliance Retail</h6>
                           </div>
                           <div className="shipping-div">
                               <span>Inaugural Offer</span>
                                    <h6>Free Shipping</h6>
                           </div>
                           <div className="three-logos">
                                <img src="https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/food-icon/sodexo.svg" />
                                <img src="https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/food-icon/edenred.svg" />
                                <img src="https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/food-icon/paytm_food_wallet.svg" />
                                <p>T&C Apply</p>
                           </div>
                           <div>
                            <button className="addtocart-div">
                                    <span className="add-cart">Add to Cart</span> 
                                    <span className="plus-symbol">+</span>
                            </button>
                           </div>
                           <div className="delivery-div">
                                <h5>Delivery</h5>
                                <div className="pincode-div">
                                    <img src="https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/location-on.svg" />
                                    <input type="tel" placeholder="Enter Your Pincode" className="input" 
                                     />
                                    <button>CHECK</button>
                                </div>
                           </div>
                            <div className="offers-div">
                            <h5>Offers</h5>
                            <h6>
                                <img src="https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/offer_green.svg" />
                                Mobikwik - Get 5% Cashback. Valid Once per customer. T&C Apply.</h6>
                            <h6>
                                <img src="https://www.jiomart.com/assets/version162335126993/smartweb/images/icons/offer_green.svg" />
                                Simpl - Pay using Simpl & Get Upto Rs. 200 Cashback* on Min. Txn of Rs. 250/-. T&C Apply.
                           </h6>
                            </div>
                      </div>
                </Grid>
                <Grid item md={12} sm={12} xs={12} >
                    <hr/>
                    <div className="description-div">
                        <h5>Description</h5>
                        <h6>{item.title}</h6>
                        <p>{item.description}</p>
                    </div>
                    <hr/>
                    <div className="description-div">
                        <h5>Feature & Details</h5>
                        <li>{item.feature}</li>
                    </div>
                    <hr/>
                    <div className="description-div">
                        <h5>Product Information</h5>
                        <div className="box-div">
                            <table className="table">
                                <tr>
                                    <td>
                                    <h6>Country of Origin</h6>
                                    </td>
                                    <td>
                                    <h6>{item.originCountry}</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <h6>Food Type {item.originCountry}</h6>
                                    </td>
                                    <td>
                                    <img src="https://www.jiomart.com/assets/jiomsite/images/icons/new-veg.svg" />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="disclaimer">
                            <h5>Disclaimer:</h5>
                            <p>Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and colour of the product may sometimes vary. Please read the label, directions and warnings carefully before use.</p>
                        </div>
                        <hr/>
                        <div>
                            <h5>Product Rating</h5>
        <Container>
            {[...Array(5)].map((item, index) => {
             const givenRating = index + 1;
         return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                Setdata("rating",givenRating)
                alert(`Are you sure you want to give ${givenRating} stars ?`);
                
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "#007bff"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
                        </div>
                    </div>
                    
                </Grid>
              </Grid>
            })
            
          
        }
     
    </div>
  );
}
export {SingleProduct}