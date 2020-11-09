import React from 'react';
import './Modal.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Modal = ({
    header, deleteNum, text, isOpen, onClick, content, ruLang
}) => {

    const handleClick = (e, className) => {
        e.preventDefault()
        if(e.target.className === className){
            return onClick()
        }
    }

    return (
        <div className='modal'>
            {isOpen &&
                <div className='modal-window' 
                    onClick={(e) => handleClick(e, 'modal-window')}
                >
                    <div className={'modal-block'}>
                        <div className={'modal-header'}>
                            <h3>{header}</h3>
                            <Icon onClick={onClick} className='modal-icon'/>
                        </div>
                        <div className='modal-content'>
                            <p className='modal-text'>
                                {text}
                            </p>
                            {!content &&<div className='modal-footer'>
                                <Button className={'modal-button'} 
                                        onClick={deleteNum} 
                                >
                                {ruLang ? 'Да' : 'Ok'}
                                </Button>
                                <Button className={'modal-button'} 
                                        onClick={onClick} 
                                >
                                {ruLang ? 'Отмена' : 'Cancel'}
                                </Button>
                            </div>
                            }
                        </div>
                    </div>
                </div> 
            }
        </div>
    );
}

export default Modal;



Modal.propTypes = {
    isOpen: PropTypes.bool,
    text: PropTypes.string,
    header: PropTypes.string,
    onSubmit: PropTypes.func,
    onClick: PropTypes.func
};

Modal.defaultProps = {
    isOpen: false,
    text: '',
    header: '',
    onSubmit: () => {},
    onClick: () => {}
};