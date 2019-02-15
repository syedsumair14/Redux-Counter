import React from 'react';
import { connect } from 'react-redux';
import {Increment, Decrement} from './actions';
const Counter = (props)=> {
    return (
    <div>
        <h2 className='offset-1'>This is a Simple Counter App</h2>
        <div className="offset-2" style={{paddingLeft: '20%'}}>{props.count}</div>
        <button className="btn btn-success offset-1" style={{marginLeft: '20%'}} onClick={()=>{props.Increment()}}>Increment</button>
        <button className="btn btn-danger" onClick={()=>{props.Decrement()}}>Decrement</button>
    </div>
    )
};

const mapStateToprops = (state) => {
   return {count: state.reduce}
};

export default connect(mapStateToprops, {Increment, Decrement})(Counter);