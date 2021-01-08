import React from 'react';
import MSNShowing from '../MSN_Showing';
import MSNBCNews from '../MSNBC_News';
import Phones from '../Phones';
import './index.css';
function Body(){
    return(
        <div className ='msn-body'>
            <MSNShowing/>
            <MSNBCNews/>
            <Phones/>
        </div>
    );
}
export default Body;