import React from 'react';

const Steps = ({stepIndex}) => {

    const shipping = (index) =>{
        if(index === 0){
            return 'active step'
        }
        else return 'completed step'
    }

    const billing = (index) =>{
        if(index === 1){
            return 'active step'
        }
        else if(index < 1){
            return 'incompleted step'
        }
        else return 'completed step'
    }

    const confirmation = (index) =>{
        if(index === 2){
            return 'active step'
        }
        else if(index < 2){
            return 'incompleted step'
        }
    }

    return ( 
         <div className='ui container checkout-container'>
            <div className="ui ordered steps">
                <div className={shipping(stepIndex)}>
                    <div className="content">
                        <div className="title">Shipping</div>
                        <div className="description">Choose your shipping options</div>
                    </div>
                </div>
                <div className={billing(stepIndex)}>
                    <div className="content">
                        <div className="title">Billing</div>
                        <div className="description">Enter billing information</div>
                    </div>
                </div>
                <div className={confirmation(stepIndex)}>
                    <div className="content">
                        <div className="title">Confirm Order</div>
                        <div className="description">Verify order details</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Steps;