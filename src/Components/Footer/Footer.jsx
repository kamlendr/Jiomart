import styled from "styled-components"
import style from "./Footer.module.css"
export function Footer1() {
    const Footer = styled.div`
       
        display: flex;
        line-height: 10px;
        text-align: left;
        gap: 20px;
        
     
      
    `
    return <div className={style.mainFooter}>
    <Footer>
        <div className={style.leftCont}>
            <p className={style.footerHead}>MOST POPULAR CATEGORIES</p>
            <p>Staples</p>
            <p>Beverages</p>
            <p>Personal care</p>
            <p>Home Care</p>
            <p>Fruites and Vegetables</p>
            <p>Baby Care</p>
            <p>Snacks & Branded Foodes</p>
            <p>Dairy & Bakery</p>
        </div>
        <div className={style.leftCont}>
            <p className={style.footerHead}>CUSTOMER SERVICES</p>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Terms and conditions</p>
            <p>Privacy policy</p>
           
            <p>E-waste Policy</p>
           

        </div>
        <div style={{height:"330px",marginTop:"50px",marginLeft:"250px",width:"1px",backgroundColor:"rgb(216,216,217)"}}></div>
        {/* ---------left container----------- */}
        <div className={style.rigthCont} >
            <p className={style.footerHead}>CONTACT US</p>
            <p style={{marginTop:"10px"}}>WhatsApp us : <a className={style.link} href="#">70003 70003</a></p>
            <p style={{marginTop:"20px"}}>Call us : <a className={style.link} href="#">1800 890 1222</a></p>
            <p>6:00 AM to 8:00 PM, 365 days</p>
            <p style={{marginTop:"20px"}}>Please note that you are accessing the BETA</p>
            <p>version of <a className={style.link} href="#">www.jiomart.com</a></p>
            <p style={{marginTop:"20px"}}>Should you encounter any bugs, glitches, lack</p>
            <p>of functionality, delayed deliveries, billing errors</p>
            <p>or other problems on the beta website, please</p>
            <p>email us on <a className={style.link} href="#">cs@jiomart.com</a></p>
            <br />
            <br />
            <p style={{fontWeight:"700"}}>DOWNLOAD APP</p>
            <br />
            <div style={{display:"flex",gap:"20px"}}>
                <div><img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png" alt="" /></div>
                <div><img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png" alt="" /></div>
            </div>
        </div>
       
    </Footer>
    <hr />
  
    <div className={style.footerHead} style={{display:"flex",gap:"220px",marginLeft:"300px"}}>
        <div>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</div>
        <div>© 2021 All rights reserved. Reliance Retail Ltd.</div>
    </div>
    </div>
}