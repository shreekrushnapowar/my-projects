import React from 'react'
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from './State/index.js'
import {actioncreator} from './State/index'
function Shop() {
    const dispatch=useDispatch();
    return (
        <div>
            <h2>Deposit/Withdrow money</h2>
           <button className='btn btn-primary mx-2' onClick={()=>dispatch(actioncreator.withdrowMoney(100))}>-</button>
                   Add this Item to Cart
           <button className='btn btn-primary mx-2' onClick={()=>dispatch(actioncreator.depositeMoney(100))}>+</button>
        </div>
    )
}

export default Shop
