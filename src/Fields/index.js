import React from 'react';
import './index.css';
function Fields(props){
    return(
        <div className='fields'>
            {  
                props.fieldsData.map(
                    field => (
                        <div className='field'><ul>{
                            field.items.map(
                                item => (
                                    <li>{item}</li>
                                )
                            )
                        }
                        </ul></div>
                    )
                )
            }
        </div>
    )
}
export default Fields;  
