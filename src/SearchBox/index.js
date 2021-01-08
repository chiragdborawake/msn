import React from 'react';
import './index.css'
function SearchBox(){
    return(
        <div className ='searchDiv'>
            <div className ='msnDiv'>msn</div>
            
            <div className ='searchBox'>  
                <div>
                    Web | MSN | Images | Videos | News | Map
                </div>

                <div>
                    <input type = 'text'></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
                <div>
                    Popular Searches:Dr.Horrible | 'Reborn' baby dolls | Jesse Venture
                </div>
            </div>

            <div className ='rss'>
                <span>
                    RSS | Esponal
                </span>
            </div>

        </div>
    );
}

export default SearchBox;
