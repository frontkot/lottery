import React from 'react';
import Icon from '../Icon/Icon';
// import PropTypes from 'prop-types';


import './Item.scss'

const Item = ({
    className, value, openModal
}) => {

    return (
        <li id={value} className={className}>
            <Icon 
                className={'remove-item'}         
                id={value}
                onClick={openModal}
            />
            <p>{value}</p>
        </li>
    );
};

export default Item;


Item.propTypes = {
    // className: PropTypes.string, 
    // value: PropTypes.string,
    // openModal: PropTypes.func
};

Item.defaultProps = {
    // className: '', 
    // value: '',
    // openModal: () => {}
};