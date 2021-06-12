import React from "react"
import {Typography,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, Button} from "@material-ui/core"
import {useStyles} from "../JS/styles"
import { useSelector,useDispatch } from "react-redux"
import "../CSS/Fruits.css"
import { Sorting } from "../Sorting/Sorting"
import { getFlour } from "../../Redux/Flours/action"


function Flours(){

    const  dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch((getFlour()))
    },[])

    const {data} = useSelector((state)=>state.flour)
    const classes = useStyles()

    return(
        <>
            <CssBaseline />
           <div className={classes.main}>
               <div className="top-image">
               <img src="https://www.jiomart.com/images/category/26/atta-flours-sooji-20200704.jpg" />
               </div>
               <div>
                   <Sorting />
               </div>
               <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={1}>
                            {
                                data.map((item)=>{
                                  return  <Grid item xs={12} md={6} lg={3}  >
                                    <Card className={classes.card}>
                                        <div className="offer-logo">
                                            <span className="offer">{Math.round(item.discount/item.cost*100)}
                                            %<br/>OFF</span>
                                            <img className="offer-logo-green" src="https://www.jiomart.com/assets/jiomsite/images/icons/new-veg.svg" />

                                        </div>

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
                                                <span>
                                                  ₹{item.cost-item.discount} 
                                                </span> 
                                                <span className="dash-cost">
                                                    M.R.P : ₹{item.cost}
                                                </span>
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
export {Flours}