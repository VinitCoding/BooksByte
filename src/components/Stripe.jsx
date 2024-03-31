import React from 'react'
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const Stripe = ({bookAmount}) => {
  const stripe_key = import.meta.env.VITE_STRIPE_KEY
    const navigate = useNavigate()
    const onToken = (token) => {
        if(token){
            navigate('/success')
        }
    }

  return (
    <div title="NOTE :- This is the test mode payment so don't make the actual payment here..
    Dummy Card :- 4242 4242 4242 4242
    MM/YY - (Put any expiry) CVC:- (Put any three no.s)" className='text-red-500 text-[15px] flex-col'>
        
        <StripeCheckout
    token={onToken}
    alipay={true}
    name=''
    currency='INR'
    amount={bookAmount *100}
    stripeKey={stripe_key}
  />
  <p>Hover before payment</p>
  </div>
  )
}

export default Stripe