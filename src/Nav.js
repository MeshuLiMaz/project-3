import React, {useState, useEffect} from 'react';
import {
    Link,
    NavLink,
  } from "react-router-dom";

function Nav(props) {
    return (
        <div>
        <div className={'p-3 text-center bg-purple-600'}>
            <ul>
                <li className={'inline p-5'}>
                    <NavLink to="/about" activeClassName="underline text-white">
                        <span className="text-xl text-white font-bold cursor-pointer">About</span>
                    </NavLink>
                    </li>
                <li className={'inline p-5'}>
                    <NavLink to="/ToDos" activeClassName="underline text-white">
                        <span className="text-xl text-white font-bold cursor-pointer">ToDos</span>
                    </NavLink>
                    </li>
                <li className={'inline p-5'}>
                    <NavLink to="/contact" activeClassName="underline text-white">
                        <span className="text-xl text-white font-bold cursor-pointer">Contact</span>
                    </NavLink>
                    </li>
            </ul>
        </div>

        </div>

       
    );
}


export default Nav;