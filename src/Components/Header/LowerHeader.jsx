import React from 'react'
import { IoMenu } from "react-icons/io5";
import style from "./Header.module.css"

function LowerHeader() {
    return (
        <div className={style.lower_container}>
            
            <ul>
                <li>
                    <IoMenu /> 
                    <p>All</p>
                </li>
                <li>Today's Deals</li>
                <li>Customer Service</li>
                <li>Registry</li>
                <li>Gift Cards</li>
                <li>Sell</li>
            </ul>
        </div>
    )
}

export default LowerHeader
