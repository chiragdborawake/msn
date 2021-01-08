import React  from "react";
import HeaderTitle from "../HeaderTitle";
import SearchBox from "../SearchBox";
import Options from "../Options";

function Header(){
    return(
        <div className ='header'>
           <HeaderTitle/>
           <SearchBox/>
           <Options/>
        </div>
    );
}
export default Header;