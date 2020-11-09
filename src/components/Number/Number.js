import React from 'react';
import './Number.scss'

const Number = ({
    content, ruLang
}) => {
    return (
        <div className='number-window'>
            <div className='number-content'>
                <h2 className='number-header'>{ruLang ? 'Следующий номер' : 'Next number is'}</h2>
                <div className='number-border'>
                    <p className='number-item'>
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Number;