import React from 'react';
import './index.css';

function MSNBCNews(){
    return(
        <div className = 'msn-body-div'>
            <div className ='msnbc-title'>MSNBC news</div>
            <div>
                <img width='100' height ='100'/>
                <p>Hezbollah hands over two coffins to Israel</p>
                <p>NYT:Obama not closing racial divide, poil show.</p>
                <ul>
                    <li>U.S envoy to join Iran meeting</li>
                    <li>Mass. Senate vote to help gay marriages</li>
                    <li>Study:Breast self-exams ineffective | Video</li>
                </ul>
            </div>
        </div>
    );
}
export default MSNBCNews;
