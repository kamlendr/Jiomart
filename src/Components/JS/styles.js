import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme)=>({
    cardGrid:{
        padding: "20px 0px",
        marginTop:"2%",
        maxWidth:"98%",
       // border: "1px solid red",
        backgroundColor:"whitesmoke",
    },
    card:{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border:"solid 1px rgba(112,112,112,.38)",
        borderRadius:"10px",
        width: "270px",
    },
    cardMedia:{
        paddingTop:"56.25%",
        marginTop:"20px",
        width: "70%",
        marginLeft:"12%",
       // border: "1px solid red"
    },
    cardContent:{
        flexGrow:1,
        color:"#151b39",
        fontSize:"14px",
        marginTop:"20px",
        marginBottom:"10px",
        //border: "1px solid red"
    },
    main:{
        marginLeft:"25%"
    },
    div:{
        //border: "1px solid red",
    },
    button:{
        alignSelf:"center",
        backgroundColor: "#008ecc",
        height: "30px",
        textColor: "#fff",
        borderRadius:"3px",
        marginBottom:"10px"
    }
}))


export {useStyles}