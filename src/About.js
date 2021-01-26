import React, {useState, useEffect} from 'react';

function About(props) {
    return (
        <div className={'text-center mt-10 bg-red-300'}>
           <h1 className={'text-xl'}>About the Creator</h1>

           <p className={'text-semi-bold text-xl p-10'}>
               Michelle is an amateur coder with hopes to eventually become a competent Front-End coder, 
               with an okay background in back-end coding.  She hopes to help Small Businesses and Theatre Companies with 
               creating engaging and user friendly websites for both client and potential customers.  The journey to becoming a 
               coder has been a trail, but the best experience so far.  Regardless of if something works or not, it all end up 
               being so rewarding in the end. In the meantime, she enjoys cooking, watching horror films with her husband, and 
               cuddling up with their puppy, Han Solo, with whatever book she scored from the local bookstore.  She hopes this 
               website isn't too basic for you, but regrdless, she has learned so much and really enjoyed creating this site. 
           </p>
        </div>
    );
}

export default About;