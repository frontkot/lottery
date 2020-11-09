import React from 'react';

import './Footer.scss'

const Footer = ({
    className, text
}) => {


    return (
        <div className={className}>
            <div className='container'>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Footer;