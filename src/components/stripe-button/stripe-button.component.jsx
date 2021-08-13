import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const stripePrice = price * 100;
    const stripePublishableKey = 'pk_test_51JO4bYKjBC5rq1F4uuNxMpSAr5X435wIs11iLKh1L7wYHFBuBDQrlXsIINLlJdweyZn4qXGY37vSbg2FpaJS9x9Z00eliese6w'

    const onToken = token => {
        console.log(token)
        alert('payment successful')
    }

    return(
        <StripeCheckout
            label='pay now'
            name='clothing eco ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total price is ${price}`}
            amount={stripePrice}
            panelLabel='pay now'
            token={onToken}
            stripeKey={stripePublishableKey}

        />
    )
}

export default StripeCheckoutButton;