import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css'


const ShippingInfo = () => {


    const [shippingData, setShippingData ] = useState({
        firstName: '',
        lastName:  '',
        address:   '',
        apt:       ''
    })


   useEffect(() => {
        var data = localStorage.getItem("shippingInfo")
        if(data){
          setShippingData(JSON.parse(data))
        }
    },[])


    useEffect(() => {
        localStorage.setItem("shippingInfo", JSON.stringify(shippingData))
    })


    const textHandler = event => {
       if(event.target.name === "shipping[first-name]"){
        setShippingData({...shippingData, firstName: event.target.value})
       }
       else if(event.target.name === "shipping[last-name]" ){
        setShippingData({...shippingData,lastName: event.target.value})
       }
       else if(event.target.name === "shipping[address]"){
        setShippingData({...shippingData, address: event.target.value})
       }
       else if(event.target.name === "shipping[address-2]" ){
        setShippingData({...shippingData, apt: event.target.value})
       }
       console.log(shippingData)
    }


    return (
        <div>
            <form className="ui form">
                <h4 className="ui dividing header">Shipping Information</h4>
                <div className="field">
                    <label>Name</label>
                    <div className="two fields">
                        <div className="field">
                            <input type="text" name="shipping[first-name]" placeholder="First Name" value={shippingData.firstName || ''} onChange={textHandler}/>
                        </div>
                        <div className="field">
                            <input type="text" name="shipping[last-name]" placeholder="Last Name"  value={shippingData.lastName || ''}  onChange={textHandler}/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Billing Address</label>
                    <div className="fields">
                        <div className="twelve wide field">
                            <input type="text" name="shipping[address]" placeholder="Street Address" value={shippingData.address || ''}  onChange={textHandler}/>
                        </div>
                        <div className="four wide field">
                            <input type="text" name="shipping[address-2]" placeholder="Apt #" value={shippingData.apt || ''}  onChange={textHandler}/>
                        </div>
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>State</label>
                        <select className="ui fluid dropdown">
                            <option value="">State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Country</label>
                        <div className="ui fluid search selection dropdown">
                            <input type="hidden" name="country" />
                            <i className="dropdown icon"></i>
                            <div className="default text">Select Country</div>
                            <div className="menu">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ShippingInfo;