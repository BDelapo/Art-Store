import React from 'react';
import './Checkout.css'

const BillingInfo = () => {
    return (
        <form className="ui form">
            <h4 className="ui dividing header">Billing Information</h4>
            <div className="field">
                <label>Card Type</label>

                {/* Doesnt work */}
                <div className="ui selection dropdown">
                    <input type="hidden" name="card[type]" />
                    <div className="default text">Type</div>
                    <i className="dropdown icon"></i>
                    <div className="menu">
                        <div className="item" data-value="visa">
                            <i className="visa icon"></i>
                            Visa
                        </div>
                        <div className="item" data-value="amex">
                            <i className="amex icon"></i>
                            American Express
                        </div>
                        <div className="item" data-value="discover">
                            <i className="discover icon"></i>
                            Discover
                        </div>
                    </div>
                </div>
            </div>
            <div className="fields">
                <div className="seven wide field">
                    <label>Card Number</label>
                    <input type="text" name="card[number]" maxLength="16" placeholder="Card #" />
                </div>
                <div className="three wide field">
                    <label>CVC</label>
                    <input type="text" name="card[cvc]" maxLength="3" placeholder="CVC" />
                </div>
                <div className="six wide field">
                    <label>Expiration</label>
                    <div className="two fields">
                        <div className="field">
                            <select className="ui fluid search dropdown" name="card[expire-month]">
                                <option value="">Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className="field">
                            <input type="text" name="card[expire-year]" maxLength="4" placeholder="Year" />
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="ui dividing header">Receipt</h4>
            <div className="field">
                <div className="ui segment">
                    <div className="field">
                        <div className="ui toggle checkbox">
                            <input type="checkbox" name="gift" tabIndex="0" className="hidden" />
                            <label>Do not include a receipt in the package</label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default BillingInfo
