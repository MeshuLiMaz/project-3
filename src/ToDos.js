import React, {useState, useEffect} from 'react';
import {Button} from "antd";

function ToDos(props) {
    return (
        <div className={'p-5 border m-5 md:m-12 lg:m-20 flex justify-center items-center'}>
            
            <input type="text" className={'border p-2 mr-5 rounded w-full'} placeholder={'Task...'} />


            <Button type={'primary'}>Add</Button>

        </div>
    );
}

export default ToDos;