import React, {useState, useEffect} from 'react';

function Nav(props) {
    return (
        <div className={'p-3 text-center bg-purple-600'}>
            <ul>
                <li className={'inline p-5'}>
                    <span className="text-xl text-white font-bold cursor-pointer">About</span>
                    </li>
                <li className={'inline p-5'}>
                    <span className="text-xl text-white font-bold underline cursor-pointer">To-Do's</span>
                    </li>
                <li className={'inline p-5'}>
                    <span className="text-xl text-white font-bold cursor-pointer">Contact</span>
                    </li>
            </ul>
        </div>
    );
}

export default Nav;