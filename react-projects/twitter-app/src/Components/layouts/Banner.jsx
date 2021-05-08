import React from 'react';
import { SocialIcon } from 'react-social-icons';
const Banner=({title1,title2})=>{
    return (
        <>
        <p>{title1} <span> <SocialIcon url="https://twitter.com/jaketrent" /></span> {title2}</p>
        </>
    );
}
export default Banner;