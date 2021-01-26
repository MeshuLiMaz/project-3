import React, {useState, useEffect} from 'react';

function About(props) {
    return (
        <div className={'text-center mt-10'}>
           <h1 className={'text-xl'}>About Page</h1>

           <p className={'text-semi-bold text-xl p-10'}>
               Michelle is an amateur coder with hopes to eventually become a competent Front-End coder, 
               with an okay background in back-end.  She hopes to help Small Businesses and Theatre Companies with creating
               simple and user friendly websites for both client and potential customers. In the meantime, she enjoys cooking,
               watching horror films with her husband, and cuddling up with their puppy, Han Solo, with whatever book she scored
               from the local bookstore.  She hopes this website isn't too basic for you, but regrdless, she has learned so much,
               and really enjoyed creating this site. 
           </p>
        </div>
    );
}

export default About;