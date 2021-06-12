import React from 'react';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from '@material-ui/core';
import { useStyles } from '../JS/styles';
import { useSelector, useDispatch } from 'react-redux';
import '../CSS/Fruits.css';
import { Sorting } from '../Sorting/Sorting';
import { getVegetables } from '../../Redux/Vegetables/action';

function FreshVegetables() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getVegetables());
  }, []);

  const { data } = useSelector((state) => state.vegetables);
  const classes = useStyles();


    return(
        <>
            <CssBaseline />
           <div className={classes.main}>
               <div className="top-image">
               <img src="https://www.jiomart.com/images/category/229/fresh-vegetables-20200704.jpg" />
               </div>
               <div>
                   <Sorting parent={"vegetables"} />
               </div>
               <Container className={classes.cardGrid} maxWidth="md">
               <p className="para">ALL PRODUCTS</p>
                        <Grid container spacing={1}>
                            {
                                data.map((item)=>{
                                  return  <Grid item xs={12} md={6} lg={3}  >
                                    <Card className={classes.card}>
                                    <img className="logo" src="https://www.jiomart.com/assets/jiomsite/images/icons/new-veg.svg" />

                                    <CardMedia  className={classes.green} 
                                            image="https://www.jiomart.com/assets/jiomsite/images/icons/new-veg.svg"
                                       />
                                       <div className="image-zoom">
                                        <CardMedia className={classes.cardMedia} 
                                            image={item.image}
                                       />
                                       </div>
                                       <CardContent className={classes.cardContent}>
                                           <div className="title">
                                                {item.title}
                                            </div> 
                                            <div className="cost">
                                                M.R.P: ₹{item.cost}
                                            </div>
                                       </CardContent>
                                       <CardActions className={classes.button}>
                                       <button className="add-button">
                                              <span className="content">Add to Cart</span> 
                                              <span className="plus">+</span>
                                           </button>
                                       </CardActions>
                                    </Card>
                                 </Grid>       
                                })
                            }
                                
                        </Grid>
               </Container>
           </div>
        </>
    )
    
}
export { FreshVegetables };
