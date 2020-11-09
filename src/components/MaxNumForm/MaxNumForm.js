import React from 'react';
import { Formik } from 'formik';

import './MaxNumForm.scss'

const MaxNumForm = ({
    className, onClick, ruLang
}) => {
    return (
        <Formik 
            initialValues={{
                number: 99
            }}
            validate={values => {
                const errors = {};

                if (!values.number) {
                    errors.number = ruLang ? '* Обязательно' : '* Required';
                } else if (isNaN(values.number) || values.number > 99 || values.number < 1 || !Number.isInteger(values.number)) {
                    errors.number = ruLang ? '* Неверное число' : '* Invalid number';
                }

                return errors;
            }}
            onSubmit={( values ) => {
                onClick(values.number)
            }}
        >
    {formik => (
        <form onSubmit={formik.handleSubmit} className={`${className}-form`} noValidate>
            <label htmlFor='number'>
                {ruLang ? 'Для начала лотереи введите сколько чисел, вы бы хотели сыграть?(от 1 до 99)' : 'To start the lottery, enter how many numbers would you like to play? (From 1 to 99)'}
                {formik.touched.number && formik.errors.number ? <span className={`${className}-error`}>{formik.errors.number}</span> : null}
            </label>
            <div className={`${className}-container`}>
            <input
                placeholder={ruLang ? 'Введите число от 1 до 99' : 'Enter a number from 1 to 99'}
                className={formik.touched.number && formik.errors.number ? `${className}-input ${className}-error_warning` : `${className}-input`}
                id='number'
                name='number'
                type='number'
                {...formik.getFieldProps('number')}
            />
            <button 
                className={formik.errors.number ? `${className}-button  ${className}-button_disabled` : `${className}-button`}
                type='submit'
                disabled={formik.errors.length === 0 ? true : false}
            >
                {ruLang ? 'Подтвердить' : 'Submit'}
            </button>
            </div>
        </form>
    )}
    </Formik>
    );
};

export default MaxNumForm;