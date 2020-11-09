import React from 'react';
import Button from '../Button/Button';
import Language from '../Language/Language';

import './Header.scss'

const Header = ({
    content, onClick, className, reset, maxNumbers, ruLang, changeLanguage
}) => {
    const start = content.length === 0 ? true : false;

    return (
        <div className='header-bg'>
            <div className='container'>
                <div className={start ? maxNumbers !== 0 ? `${className} ${className}-before_game` : `${className} ${className}-start` : `${className} ${className}-game`}>
                    {!start && <Button 
                            className='header-button' 
                            onClick={reset}
                        >
                            {ruLang ? 'Сбросить игру' : 'Reset game'}
                    </Button>}
                    {maxNumbers === 0 ? <h2>{ruLang ? 'Добро пожаловать в нашу лотерею!' : 'Welcome to our lottery!'}</h2> : <h2>{ruLang ? `Максимальное количетсво чисел - ${maxNumbers}` : `Maximum numbers of balls is - ${maxNumbers}`}</h2>}
                    {maxNumbers !== 0 && <Button 
                        className='header-button' 
                        onClick={onClick}
                    >
                        {start ? ruLang ? 'Давай начнем!' : 'Let`s start' : ruLang ? 'Следующий номер' : 'Next number'}
                    </Button>}
                    <Language onClick={changeLanguage} ruLang={ruLang}/>
                </div>
            </div>
        </div>
    );
};

export default Header;

Header.defaultProps = {
    // className: 'header',
    // showContent: false
}