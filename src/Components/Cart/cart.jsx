import React from 'react'
import style from './Cart.module.css'
export const Cart = () => {

   const data = [
        {
            title:"Orange Imported 1 kg",
            img:"",
            price:"rs 357.00",
            id:1,
            qty:2
        },
        {
            title:"Orange Imported 1 kg",
            img:"",
            price:"rs 357.00",
            id:1,
            qty:2
        },
        {
            title:"Orange Imported 1 kg",
            img:"",
            price:"rs 357.00",
            id:1,
            qty:2
        },
        {
            title:"Orange Imported 1 kg",
            img:"",
            price:"rs 357.00",
            id:1,
            qty:2
        }
    ]

    return (
        <div style={{marginTop:"25px"}}>
            <div className={style.cartHead}>
                <div>
                   <h4>My Cart ({"1"})</h4> 
                </div>
                <div>
                    <div>
                        <img
                            style={{ height: '24px' }}
                            src='https://www.jiomart.com/msassets/images/icons/cart_blue_active.svg'
                        />
                        {'  '} <span style={{ fontWeight: "600" }}>{' '} Your Cart</span>

                    </div>
                    <div >
                        <img src="https://www.jiomart.com/msassets/images/icons/orders_review_inactive.svg" />
                        {' '} <span > {' '} Order Summary</span>
                    </div>
                    <div >
                        <img src="https://www.jiomart.com/msassets/images/icons/payment_inactive.svg" />
                        {' '} <span > {' '} Payment</span>
                    </div>
                  
                </div>
            </div>
            <div className={style.cartBody}>
                <div className={style.itemCardCart}>
                    <div style={{display:"flex"}}>
                        <div>Groceries Basket (6 items)</div>
                        <div>2211.00</div>
                    </div>
                </div>
                <div className={style.paymentBody}>

                </div>
            </div>
        </div>
    )
}
