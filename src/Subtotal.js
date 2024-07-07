import React from 'react'
import CurrencyFormat from 'react-currency-format'
import "./Subtotal.css"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
function Subtotal() {
    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
    <CurrencyFormat
        renderText={(value)=>(
            <>
                <p>
                    Subtotal({basket.length} items):
                    <strong>{value}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox" />
                    This Order Contains A gift
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs."}
    />
    <button onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;
