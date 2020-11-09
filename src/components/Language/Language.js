import React from 'react';
import './Language.scss';

const Language = ({
    onClick, ruLang
}) => {
    const ruLanguage = ruLang ? 'language-item language-active' : 'language-item';
    const enLanguage = ruLang ? 'language-item' : 'language-item language-active';

    return (
        <div className='language-block'>
            <button onClick={onClick} className={ruLanguage}>ru</button>
            <button onClick={onClick} className={enLanguage}>en</button>
        </div>
    );
};

export default Language;