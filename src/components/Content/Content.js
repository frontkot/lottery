import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

import './Content.scss'
import MaxNumForm from '../MaxNumForm/MaxNumForm';

const Content = ({
    content, className, header, openModal, maxNumbers, ruLang, setMaxNum
}) => {

    const elemItems = content.map(e => 
        <Item 
            className='elem-item'
            value={e.value}
            openModal={openModal}
            key={e.value}
        />
        )

    return (
        <div className='container'>
            <div className={className}>
                <h3>{header}</h3>
                {maxNumbers === 0 && <MaxNumForm className='maxnum' ruLang={ruLang} onClick={setMaxNum}/>}
                {content.length !== 0 && <p className={`${className}-info_text`}>{ruLang ? 'Последний номер' : 'Last number'}</p>}
                {maxNumbers !== 0 && <ul className={`${className}-list`}>{content.length === 0 ? '' : elemItems}</ul>}
            </div>
        </div>
    );
};

export default Content;

Content.propTypes = {
    isOpen: PropTypes.bool,
    content: PropTypes.array,
    className: PropTypes.string
    // favList: PropTypes.array,
    // changeBg: PropTypes.func,
    // openModal: PropTypes.func,
};

Content.defaultProps = {
    isOpen: false,
    className: '',
    content: [],
    // favList: [],
    // changeBg: () => {},
    // openModal: () => {}
};