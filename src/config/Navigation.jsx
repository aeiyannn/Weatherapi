import React from "react";
import{Routes,Route} from 'react-router-dom';
import Search from '../Components/Search';
import Wheather from'../Components/Wheather'

function Navigation(){
    return(
    <Routes>
        <Route path="/" element={<Search/>}></Route>
        <Route path="/wheather" element={<Wheather/>}></Route>
    </Routes>
    )
}
export default Navigation