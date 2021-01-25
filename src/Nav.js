import React, {useState, useEffect} from 'react';

function Nav(props) {
    return (
        <div>
        <div className={'p-3 text-center bg-purple-600'}>
            <ul>
                <li className={'inline p-5'}>
                    <span className="text-xl text-white font-bold underline cursor-pointer">About</span>
                    </li>
                <li className={'inline p-5'}>
                    <span className="text-xl text-white font-bold underline cursor-pointer">To-Do's</span>
                    </li>
                <li className={'inline p-5'}>
                    <span className="text-xl text-white font-bold underline cursor-pointer">Contact</span>
                    </li>
            </ul>
        </div>

            <div className="flex justify-center items-center">
                <div>hey</div>

            </div>

        </div>

       
    );
}


export default Nav;