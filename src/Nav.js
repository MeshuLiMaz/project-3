import React, {useState, useEffect} from 'react';
import {
    Link,
  } from "react-router-dom";

function Nav(props) {
    return (
        <div>
        <div className={'p-3 text-center bg-purple-600'}>
            <ul>
                <li className={'inline p-5'}>
                    <Link to="/about">
                        <span className="text-xl text-white font-bold cursor-pointer">About</span>
                    </Link>
                    </li>
                <li className={'inline p-5'}>
                    <Link to="/ToDos">
                        <span className="text-xl text-white font-bold underline cursor-pointer">ToDos</span>
                    </Link>
                    </li>
                <li className={'inline p-5'}>
                    <Link to="/contact">
                        <span className="text-xl text-white font-bold cursor-pointer">Contact</span>
                    </Link>
                    </li>
            </ul>
        </div>

        </div>

       
    );
}


export default Nav;