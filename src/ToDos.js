import React, {useState, useEffect} from 'react';
import {Button} from "antd";

function ToDos(props) {
    return (
        <div className={'p-5 border m-5 md:m-12 lg:m-20'}>
            
            <div className={'flex justify-center items-center'}>
            <input type="text" className={'border p-2 mr-5 rounded w-full'} placeholder={'Task...'} />

            <Button type={'primary'}>Add</Button>

            </div>

            <div className={'bg-gray-100 mt-5 p-5'}>
                <ul>
                    <li className={'p-1 border-b-2'}>
                        <input type="checkbox" className={'mr-2'}/>
                        <i class="fas fa-pen-fancy">
                            Do Laundry
                        </i>

                    </li>
                    <li className={'p-1 border-b-2'}>
                        <input type="checkbox" className={'mr-2'}/>
                        <i class="fas fa-pen-fancy">
                            Schedule Doc appt
                        </i>
                        
                    </li>
                    <li className={'p-1 border-b-2'}>
                        <input type="checkbox" className={'mr-2'}/>
                        <i class="fas fa-pen-fancy">
                            Schedule Wedding food tasting
                        </i>

                    </li>
                    <li className={'p-1 border-b-2'}>
                        <input type="checkbox" className={'mr-2'}/>
                        <i class="fas fa-pen-fancy">
                            Call Mom to set Wedding Dress shop date
                        </i>
                        
                    </li>
                    <li className={'p-1 border-b-2'}>
                        <input type="checkbox" className={'mr-2'}/>
                        <i class="fas fa-pen-fancy">
                            Pickup pup from Groomer at 4pm
                        </i>
                        
                    </li>

                </ul>
            </div>

        </div>
    );
}

export default ToDos;