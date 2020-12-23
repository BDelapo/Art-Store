import React, { useState, useEffect, Component } from 'react';
import './Checkout.css'
import Steps from './Steps';
import BillingInfo from './BillingInfo';
import ShippingInfo from './ShippingInfo';
import Confirmation from './Confirmation';

const Checkout = props => {

    const steps = [<ShippingInfo />, <BillingInfo />, <Confirmation />]

    const [stepIndex, setStepIndex] = useState(0)
    const [nextStep, setNextStep] = useState(0)

    useEffect(() => {
        setNextStep(nextStep + 1)
    }, [stepIndex])

    const CurrentStep = () => {
        console.log("step index" + stepIndex)
        return steps[stepIndex]
    }

    const nextButton = () => {
        if (stepIndex < 2) {
            return <button className="ui button" onClick={() => setStepIndex(nextStep)}> Next </button>
        }
        else return <button className="ui button"> Place Order </button>
    }

    return (
        <div className='ui container center aligned checkout-container'>
            <Steps stepIndex={stepIndex} />
            <div className='ui segment left aligned'>
                {CurrentStep()}
                {nextButton()}
            </div>
        </div>
    );
}

export default Checkout;